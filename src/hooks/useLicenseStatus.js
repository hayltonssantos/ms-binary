// TODO: Implementar useLicenseStatus.js
import { useLicenseUser } from '../contexts/LicenseUserContext';

export function useLicenseStatus() {
  const { 
    userLicense, 
    hasActiveLicense, 
    getDaysRemaining, 
    getPlanType, 
    isVip,
    loading,
    error
  } = useLicenseUser();

  // Informações do plano
  const getPlanInfo = () => {
    const planType = getPlanType();
    const daysRemaining = getDaysRemaining();
    const isActive = hasActiveLicense();

    const planNames = {
      trial: 'Trial Gratuito',
      vip_monthly: 'VIP Mensal',
      vip_yearly: 'VIP Anual',
      lifetime: 'Vitalício',
      expired: 'Expirado'
    };

    const planColors = {
      trial: '#3498db',
      vip_monthly: '#f39c12',
      vip_yearly: '#e74c3c',
      lifetime: '#9b59b6',
      expired: '#95a5a6'
    };

    return {
      type: planType,
      name: planNames[planType] || 'Desconhecido',
      color: planColors[planType] || '#95a5a6',
      daysRemaining,
      isActive,
      isVip: isVip(),
      features: userLicense?.features || [],
      downloadsRemaining: userLicense?.downloadsRemaining || 0
    };
  };

  // Status visual para UI
  const getStatusInfo = () => {
    const days = getDaysRemaining();
    
    if (!hasActiveLicense()) {
      return {
        color: 'red',
        text: 'Expirado',
        urgency: 'expired',
        icon: '❌'
      };
    }
    
    if (days <= 1) {
      return {
        color: 'red',
        text: 'Expira hoje',
        urgency: 'critical',
        icon: '🚨'
      };
    }
    
    if (days <= 3) {
      return {
        color: 'orange',
        text: 'Expirando em breve',
        urgency: 'urgent',
        icon: '⚠️'
      };
    }
    
    if (days <= 7) {
      return {
        color: 'yellow',
        text: 'Ativo',
        urgency: 'warning',
        icon: '⏰'
      };
    }
    
    if (isVip()) {
      return {
        color: 'green',
        text: 'VIP Ativo',
        urgency: 'normal',
        icon: '👑'
      };
    }
    
    return {
      color: 'blue',
      text: 'Ativo',
      urgency: 'normal',
      icon: '✅'
    };
  };

  // Progresso da licença
  const getProgressInfo = () => {
    if (!userLicense) return { percentage: 0, color: '#95a5a6' };
    
    const planType = getPlanType();
    const days = getDaysRemaining();
    
    if (planType === 'lifetime') {
      return { percentage: 100, color: '#9b59b6' };
    }
    
    const totalDays = planType === 'trial' ? 7 : 
                     planType === 'vip_monthly' ? 30 : 
                     planType === 'vip_yearly' ? 365 : 30;
    
    const percentage = Math.max(0, Math.min(100, (days / totalDays) * 100));
    
    return {
      percentage,
      color: percentage > 50 ? '#27ae60' : 
             percentage > 25 ? '#f39c12' : '#e74c3c'
    };
  };

  return {
    ...getPlanInfo(),
    status: getStatusInfo(),
    progress: getProgressInfo(),
    license: userLicense,
    loading,
    error
  };
}
