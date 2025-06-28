import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection, updateDoc } from 'firebase/firestore';
import { auth, userDb } from '../services/userFirebase'; // ← Usuários no MsBinary
import { licenseDb } from '../services/licenseFirebase'; // ← Licenças no SwarleysLicence

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  // Função para gerar licença
  const generateRandomLicense = () => {
    return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 6);
  };

  // Criar licença no sistema SwarleysLicence
  async function createLicenseInSwarleysSystem(userData) {
    try {
      console.log("🔗 Criando licença no sistema SwarleysLicence...");
      
      const email = userData.email;
      const contratoRef = doc(licenseDb, "contratos", email); // ← SwarleysLicence Firebase

      // Verificar se contrato já existe
      const contratoSnap = await getDoc(contratoRef);
      
      if (contratoSnap.exists()) {
        console.log("📋 Contrato já existe no SwarleysLicence");
        await updateDoc(contratoRef, {
          lastUpdate: new Date().toISOString(),
          source: "MsBinary"
        });
      } else {
        console.log("📋 Criando novo contrato no SwarleysLicence...");
        const novoContrato = {
          email: email,
          cliente: userData.name,
          parceiro: "Ms Binary Elite",
          createdAt: new Date().toISOString(),
          source: "MsBinary"
        };
        
        await setDoc(contratoRef, novoContrato);
        console.log("✅ Contrato criado no SwarleysLicence:", email);
      }

      // Criar licença trial
      const novaLicenca = generateRandomLicense();
      const dataExpiracao = new Date();
      dataExpiracao.setDate(dataExpiracao.getDate() + 7); // 7 dias trial
      
      const novaAtivacao = {
        dispositivo: "MHI Trading Bot",
        licenca: novaLicenca,
        dataExpiracao: dataExpiracao.toISOString().split('T')[0],
        status: true,
        plan: "trial",
        obs: "Licença trial criada automaticamente via MsBinary",
        createdAt: new Date().toISOString().split('T')[0],
        createdBy: "Sistema MsBinary"
      };

      // Adicionar licença na subcoleção do SwarleysLicence
      const licencaRef = doc(collection(contratoRef, "licencas"), novaLicenca);
      await setDoc(licencaRef, novaAtivacao);
      
      console.log("✅ Licença trial criada no SwarleysLicence:", novaLicenca);
      
      return {
        contratoId: email,
        licencaId: novaLicenca,
        dataExpiracao: dataExpiracao.toISOString()
      };
      
    } catch (error) {
      console.error("❌ Erro ao criar licença no SwarleysLicence:", error);
      // Não falhar o registro se der erro na licença
      return null;
    }
  }

// Adicionar verificação se usuário já existe
async function register(email, password, userData) {
  try {
    console.log("🔐 Iniciando registro de usuário no MsBinary...");
    
    // 1️⃣ Verificar se usuário já existe
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // 2️⃣ Atualizar perfil
      await updateProfile(user, {
        displayName: userData.name
      });

      // 3️⃣ Salvar dados do usuário (com try/catch específico)
      try {
        const userDocData = {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          promoCode: userData.promoCode || '',
          createdAt: new Date().toISOString(),
          plan: 'trial',
          status: 'active',
          registrationSource: 'MsBinary'
        };
        
        await setDoc(doc(userDb, 'users', user.uid), userDocData);
        console.log("✅ Usuário salvo no MsBinary Firebase");
      } catch (userSaveError) {
        console.error("❌ Erro ao salvar usuário:", userSaveError);
        // Continuar mesmo se der erro ao salvar perfil
      }

      // 4️⃣ Criar licença no SwarleysLicence (com try/catch específico)
      try {
        const licenseInfo = await createLicenseInSwarleysSystem(userData);
        
        if (licenseInfo) {
          await updateDoc(doc(userDb, 'users', user.uid), {
            swarleysLicenseId: licenseInfo.licencaId,
            swarleysContractId: licenseInfo.contratoId,
            licenseCreatedAt: new Date().toISOString()
          });
          console.log("🔗 Referência da licença salva");
        }
      } catch (licenseError) {
        console.error("❌ Erro ao criar licença:", licenseError);
        // Não falhar o registro se der erro na licença
      }

      console.log("🎉 Registro completo!");
      return userCredential;
      
    } catch (authError) {
      if (authError.code === 'auth/email-already-in-use') {
        throw new Error('Este email já está sendo usado. Tente fazer login.');
      }
      throw authError;
    }
  } catch (error) {
    console.error('❌ Erro no registro:', error);
    throw error;
  }
}

  // Login
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  // Buscar perfil do usuário
  async function fetchUserProfile(uid) {
    try {
      const docRef = doc(userDb, 'users', uid); // ← MsBinary Firebase
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const profileData = docSnap.data();
        setUserProfile(profileData);
        return profileData;
      }
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    register,
    login,
    logout,
    fetchUserProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
