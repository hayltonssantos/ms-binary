import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  doc,
  getDoc,
  getDocs,
  collection,
  onSnapshot,
  updateDoc
} from 'firebase/firestore';
import { licenseDb } from '../services/licenseFirebase'; // ← SwarleysLicence Firebase
import { useAuth } from './AuthContext';

const LicenseUserContext = createContext();

export function useLicenseUser() {
  const context = useContext(LicenseUserContext);
  if (!context) {
    throw new Error('useLicenseUser must be used within a LicenseUserProvider');
  }
  return context;
}

export function LicenseUserProvider({ children }) {
  const { currentUser } = useAuth();
  const [userLicense, setUserLicense] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar licenças do sistema SwarleysLicence
  const fetchLicensesFromSwarleysSystem = async (userEmail) => {
    try {
      console.log("🔍 Buscando licenças no SwarleysLicence para:", userEmail);
      setUserEmail(userEmail);
      
      const contratoRef = doc(licenseDb, "contratos", userEmail); // ← SwarleysLicence Firebase
      const contratoSnap = await getDoc(contratoRef);
      
      if (contratoSnap.exists()) {
        console.log("📋 Contrato encontrado no SwarleysLicence:", contratoSnap.data());
        
        // Buscar todas as licenças do contrato
        const licencasSnapshot = await getDocs(collection(contratoRef, "licencas"));
        const licencasArray = licencasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        console.log("🎫 Licenças encontradas no SwarleysLicence:", licencasArray.length);
        
        // Pegar a licença ativa mais recente
        const licencaAtiva = licencasArray
          .filter(lic => lic.status === true)
          .sort((a, b) => new Date(b.createdAt || b.dataExpiracao) - new Date(a.createdAt || a.dataExpiracao))[0];
        
        if (licencaAtiva) {
          console.log("✅ Licença ativa encontrada no SwarleysLicence:", licencaAtiva.licenca);
          
          // Converter para formato do sistema do usuário
          const licenseData = {
            userId: currentUser.uid,
            email: userEmail,
            licenseKey: licencaAtiva.licenca || licencaAtiva.id,
            plano: determinePlanType(licencaAtiva),
            status: licencaAtiva.status,
            dataExpiracao: licencaAtiva.dataExpiracao,
            dataCriacao: licencaAtiva.createdAt || new Date().toISOString(),
            dispositivo: licencaAtiva.dispositivo,
            features: getFeaturesByPlan(licencaAtiva),
            downloadsRemaining: getDownloadsByPlan(licencaAtiva),
            obs: licencaAtiva.obs || '',
            swarleysSync: true,
            lastSync: new Date().toISOString()
          };
          
          setUserLicense(licenseData);
          return licenseData;
        }
      }
      
      console.log("❌ Nenhuma licença encontrada no SwarleysLicence");
      return null;
    } catch (error) {
      console.error("❌ Erro ao buscar licenças do SwarleysLicence:", error);
      return null;
    }
  };

  const activatePromoCode = async (promoCode) => {
    if (!currentUser || !currentUser.email) {
      return false;
    }

    try {
      setLoading(true);
      setError(null);

      if (!promoCode || promoCode.trim() === '') {
        setError("Código promocional inválido");
        return false;
      }

      // Buscar código promocional específico
      const promoRef = doc(licenseDb, "promocoes", promoCode.toLowerCase());
      const promoSnap = await getDoc(promoRef);

      if (!promoSnap.exists()) {
        setError("Código promocional não encontrado");
        return false;
      }

      const promoData = promoSnap.data();
      
      // Verificar se o código está ativo
      if (!promoData.active) {
        setError("Código promocional expirado");
        return false;
      }

      // Verificar se já foi usado pelo usuário
      if (promoData.usedBy && promoData.usedBy.includes(currentUser.email)) {
        setError("Código promocional já utilizado");
        return false;
      }

      // Verificar limite de uso
      if (promoData.maxUses && promoData.usageCount >= promoData.maxUses) {
        setError("Código promocional esgotado");
        return false;
      }

      // Aplicar benefícios do código
      const contratoRef = doc(licenseDb, "contratos", currentUser.email);
      const contratoSnap = await getDoc(contratoRef);

      if (contratoSnap.exists()) {
        // Buscar licença ativa
        const licencasSnapshot = await getDocs(collection(contratoRef, "licencas"));
        const licencasArray = licencasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const licencaAtiva = licencasArray
          .filter(lic => lic.status === true)
          .sort((a, b) => new Date(b.createdAt || b.dataExpiracao) - new Date(a.createdAt || a.dataExpiracao))[0];

        if (licencaAtiva) {
          const licencaRef = doc(contratoRef, "licencas", licencaAtiva.id);
          
          // Aplicar benefícios
          let updateData = {};
          
          if (promoData.extraDays) {
            const currentExpiry = new Date(licencaAtiva.dataExpiracao);
            const newExpiry = new Date(currentExpiry.getTime() + (promoData.extraDays * 24 * 60 * 60 * 1000));
            updateData.dataExpiracao = newExpiry.toISOString();
          }
          
          if (promoData.upgradePlan) {
            updateData.obs = `vip ${promoData.upgradePlan || ''} - Upgrade via código ${promoCode}`;
          }

          updateData.promoCodeUsed = promoCode;
          updateData.promoActivatedAt = new Date().toISOString();

          // Atualizar licença
          await updateDoc(licencaRef, updateData);

          // Atualizar contador do código promocional
          await updateDoc(promoRef, {
            usedBy: [...(promoData.usedBy || []), currentUser.email],
            usageCount: (promoData.usageCount || 0) + 1,
            lastUsed: new Date().toISOString()
          });

          console.log("✅ Código promocional ativado com sucesso!");
          return true;
        } else {
          setError("Nenhuma licença ativa encontrada");
          return false;
        }
      } else {
        setError("Contrato não encontrado");
        return false;
      }

    } catch (error) {
      console.error("❌ Erro ao ativar código promocional:", error);
      setError("Erro ao ativar código promocional");
      return false;
    } finally {
      setLoading(false); // ← IMPORTANTE: sempre executar
    }
  };

  // resto das funções permanecem iguais...
  const determinePlanType = (licenca) => {
    const obs = (licenca.obs || '').toLowerCase();
    
    if (obs.includes('vip') || obs.includes('premium')) {
      if (obs.includes('anual') || obs.includes('yearly')) return 'vip_yearly';
      if (obs.includes('mensal') || obs.includes('monthly')) return 'vip_monthly';
      if (obs.includes('vitalicio') || obs.includes('lifetime')) return 'lifetime';
      return 'vip_monthly';
    }
    
    return 'trial';
  };

  const getFeaturesByPlan = (licenca) => {
    const planType = determinePlanType(licenca);
    
    const featureMap = {
      trial: ['basic_signals', 'demo_trading', 'basic_support'],
      vip_monthly: ['premium_signals', 'live_trading', 'priority_support', 'advanced_analytics'],
      vip_yearly: ['premium_signals', 'live_trading', 'priority_support', 'advanced_analytics', 'custom_strategies'],
      lifetime: ['premium_signals', 'live_trading', 'priority_support', 'advanced_analytics', 'custom_strategies', 'unlimited_access']
    };
    
    return featureMap[planType] || featureMap.trial;
  };

  const getDownloadsByPlan = (licenca) => {
    const planType = determinePlanType(licenca);
    
    if (planType === 'trial') return 1;
    if (planType.includes('vip') || planType === 'lifetime') return -1;
    
    return 1;
  };

  const hasActiveLicense = () => {
    if (!userLicense) return false;
    
    const now = new Date();
    const expiry = new Date(userLicense.dataExpiracao);
    
    return userLicense.status && expiry > now;
  };

  const getDaysRemaining = () => {
    if (!userLicense || !userLicense.dataExpiracao) return 0;
    
    const now = new Date();
    const expiry = new Date(userLicense.dataExpiracao);
    const diffTime = expiry - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return Math.max(0, diffDays);
  };

  const getPlanType = () => {
    if (!userLicense) return 'trial';
    
    const daysRemaining = getDaysRemaining();
    
    if (daysRemaining <= 0) return 'expired';
    return userLicense.plano || 'trial';
  };

  const isVip = () => {
    const planType = getPlanType();
    return ['vip_monthly', 'vip_yearly', 'lifetime'].includes(planType);
  };

  const getUserLicense = async () => {
    if (!currentUser) return null;

    try {
      setLoading(true);
      setError(null);
      
      // Buscar diretamente do sistema SwarleysLicence
      const swarleysLicense = await fetchLicensesFromSwarleysSystem(currentUser.email);
      
      if (swarleysLicense) {
        console.log("✅ Licença sincronizada do SwarleysLicence");
        return swarleysLicense;
      } else {
        console.log("❌ Nenhuma licença encontrada no SwarleysLicence");
        setError("Nenhuma licença encontrada. Entre em contato com o suporte.");
        return null;
      }
    } catch (error) {
      console.error("❌ Erro ao buscar licença:", error);
      setError("Erro ao carregar informações da licença");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Listener em tempo real para mudanças no SwarleysLicence
  useEffect(() => {
    if (currentUser && currentUser.email) {
      console.log("👂 Configurando listener para SwarleysLicence:", currentUser.email);
      
      const contratoRef = doc(licenseDb, "contratos", currentUser.email); // ← SwarleysLicence Firebase
      
      const unsubscribe = onSnapshot(contratoRef, async (doc) => {
        if (doc.exists()) {
          console.log("🔄 Mudança detectada no SwarleysLicence, sincronizando...");
          await fetchLicensesFromSwarleysSystem(currentUser.email);
        }
        setLoading(false);
      }, (error) => {
        console.error("❌ Erro no listener SwarleysLicence:", error);
        setError("Erro ao monitorar licença");
        setLoading(false);
      });

      getUserLicense();
      return unsubscribe;
    } else {
      setUserLicense(null);
      setLoading(false);
    }
  }, [currentUser]);

  const value = {
    userLicense,
    loading,
    error,
    userEmail,
    getUserLicense,
    hasActiveLicense,
    getDaysRemaining,
    getPlanType,
    isVip,
    fetchLicensesFromSwarleysSystem,
    activatePromoCode
  };

  return (
    <LicenseUserContext.Provider value={value}>
      {children}
    </LicenseUserContext.Provider>
  );
}
