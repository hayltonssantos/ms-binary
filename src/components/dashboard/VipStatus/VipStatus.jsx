import React, { useState } from 'react';
import { useLicenseStatus } from '../../../hooks/useLicenseStatus';
import { useLicenseUser } from '../../../contexts/LicenseUserContext';
import styles from './VipStatus.module.scss';

const VipStatus = () => {
  const licenseStatus = useLicenseStatus();
  const { activatePromoCode } = useLicenseUser();
  const [promoCode, setPromoCode] = useState('');
  const [promoLoading, setPromoLoading] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');
  const [showPromoForm, setShowPromoForm] = useState(false);

  const handlePromoSubmit = async (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    setPromoLoading(true);
    setPromoMessage('');

    try {
      const result = await activatePromoCode(promoCode);
      setPromoMessage({
        type: 'success',
        text: result.message
      });
      setPromoCode('');
      setTimeout(() => {
        setShowPromoForm(false);
        setPromoMessage('');
      }, 3000);
    } catch (error) {
      setPromoMessage({
        type: 'error',
        text: error.message
      });
    }

    setPromoLoading(false);
  };

  const formatExpiryDate = () => {
    if (!licenseStatus.license?.dataExpiracao) return 'N/A';
    
    const date = new Date(licenseStatus.license.dataExpiracao);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (licenseStatus.loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Carregando informações da licença...</p>
      </div>
    );
  }

  return (
    <div className={styles.vipStatus}>
      <div className={styles.statusCard}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>Status da Licença</h2>
            <div className={`${styles.badge} ${styles[licenseStatus.status.urgency]}`}>
              <span className={styles.badgeIcon}>{licenseStatus.status.icon}</span>
              <span>{licenseStatus.status.text}</span>
            </div>
          </div>
        </div>

        <div className={styles.planInfo}>
          <div className={styles.planHeader}>
            <div className={styles.planName}>
              <span className={styles.planIcon}>
                {licenseStatus.isVip ? '👑' : '🎯'}
              </span>
              <div className={styles.planDetails}>
                <span className={styles.name}>{licenseStatus.name}</span>
                <span className={styles.key}>
                  Chave: {licenseStatus.license?.licenseKey || 'N/A'}
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.timeInfo}>
            <div className={styles.timeRemaining}>
              <div className={styles.daysContainer}>
                <span className={styles.daysNumber}>{licenseStatus.daysRemaining}</span>
                <span className={styles.daysLabel}>
                  {licenseStatus.daysRemaining === 1 ? 'dia restante' : 'dias restantes'}
                </span>
              </div>
              
              <div className={styles.expiryDate}>
                <span className={styles.expiryLabel}>Expira em:</span>
                <span className={styles.expiryValue}>{formatExpiryDate()}</span>
              </div>
            </div>
            
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progress}
                  style={{ 
                    width: `${licenseStatus.progress.percentage}%`,
                    backgroundColor: licenseStatus.progress.color
                  }}
                />
              </div>
              <span className={styles.progressText}>
                {licenseStatus.progress.percentage.toFixed(0)}%
              </span>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <h3 className={styles.featuresTitle}>Recursos Disponíveis</h3>
          <div className={styles.featureGrid}>
            {licenseStatus.features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <span className={styles.featureIcon}>✅</span>
                <span className={styles.featureName}>{getFeatureName(feature)}</span>
              </div>
            ))}
          </div>
        </div>

{/*         <div className={styles.downloadInfo}>
          <div className={styles.downloadStatus}>
            <span className={styles.downloadIcon}>📱</span>
            <div className={styles.downloadDetails}>
              <span className={styles.downloadLabel}>Downloads Restantes:</span>
              <span className={styles.downloadCount}>
                {licenseStatus.downloadsRemaining === -1 ? 'Ilimitado' : licenseStatus.downloadsRemaining}
              </span>
            </div>
          </div>
        </div> */}

        {!licenseStatus.isVip && (
          <div className={styles.upgradeSection}>
            <div className={styles.upgradeHeader}>
              <h3 className={styles.upgradeTitle}>🚀 Upgrade para VIP</h3>
              <p className={styles.upgradeSubtitle}>
                Desbloqueie todos os recursos premium e maximize seus lucros!
              </p>
            </div>
            
            <div className={styles.upgradeOptions}>
              <div className={styles.upgradeOption}>
                <div className={styles.optionHeader}>
                  <span className={styles.optionName}>VIP Mensal</span>
                  <span className={styles.optionPrice}>R$ 19,90</span>
                </div>
                <ul className={styles.optionFeatures}>
                  <li>✅ Sinais Premium</li>
                  <li>✅ Suporte Prioritário</li>
                </ul>
                <button className={styles.upgradeBtn}>
                  <a href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808497b228ac0197b3be232c00cd"
                     target="_blank" rel="noopener noreferrer"
                  >
                    Assinar Mensal</a>
                </button>
              </div>
              
              <div className={`${styles.upgradeOption} ${styles.popular}`}>
                <div className={styles.popularBadge}>Mais Popular</div>
                <div className={styles.optionHeader}>
                  <span className={styles.optionName}>VIP Anual</span>
                  <div className={styles.priceContainer}>
                    <span className={styles.oldPrice}>R$ 697</span>
                    <span className={styles.optionPrice}>R$ 143,28</span>
                  </div>
                </div>
                <ul className={styles.optionFeatures}>
                  <li>✅ Todos os recursos mensais</li>
                  <li>✅ Estratégias Personalizadas</li>
                  <li>✅ Suporte 1 para 1</li>
                  <li>✅ 40% de desconto</li>
                </ul>
                <button className={`${styles.upgradeBtn} ${styles.primary}`}>
                  <a href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808497b228ac0197b3c0d86300d0"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Assinar Anual
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={styles.promoSection}>
          <div className={styles.promoHeader}>
            <h3 className={styles.promoTitle}>💎 Código Promocional</h3>
            {!showPromoForm && (
              <button 
                className={styles.promoToggle}
                onClick={() => setShowPromoForm(true)}
              >
                Tenho um código
              </button>
            )}
          </div>
          
          {showPromoForm && (
            <div className={styles.promoForm}>
              <form onSubmit={handlePromoSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Digite seu código promocional"
                    className={styles.promoInput}
                    disabled={promoLoading}
                  />
                  <button 
                    type="submit" 
                    className={styles.promoBtn}
                    disabled={promoLoading || !promoCode.trim()}
                  >
                    {promoLoading ? (
                      <span className={styles.loading}>
                        <span className={styles.spinner}></span>
                        Ativando...
                      </span>
                    ) : (
                      'Ativar'
                    )}
                  </button>
                </div>
              </form>
              
              <button 
                className={styles.cancelBtn}
                onClick={() => {
                  setShowPromoForm(false);
                  setPromoCode('');
                  setPromoMessage('');
                }}
              >
                Cancelar
              </button>
            </div>
          )}
          
          {promoMessage && (
            <div className={`${styles.promoMessage} ${styles[promoMessage.type]}`}>
              <span className={styles.messageIcon}>
                {promoMessage.type === 'success' ? '✅' : '❌'}
              </span>
              <span>{promoMessage.text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Função para traduzir nomes das features
const getFeatureName = (feature) => {
  const featureNames = {
    basic_signals: 'Sinais Básicos',
    premium_signals: 'Sinais Premium',
    demo_trading: 'Trading Demo',
    live_trading: 'Trading ao Vivo',
    basic_support: 'Suporte Básico',
    priority_support: 'Suporte Prioritário',
    advanced_analytics: 'Análises Avançadas',
    copy_trading: 'Copy Trading',
    custom_strategies: 'Estratégias Personalizadas',
    '1on1_support': 'Suporte 1 para 1',
    beta_features: 'Recursos Beta',
    unlimited_access: 'Acesso Ilimitado'
  };
  
  return featureNames[feature] || feature;
};

export default VipStatus;
