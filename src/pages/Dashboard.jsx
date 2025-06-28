// TODO: Implementar Dashboard.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLicenseStatus } from '../hooks/useLicenseStatus';
import VipStatus from '../components/dashboard/VipStatus/VipStatus';
import DownloadSection from '../components/dashboard/DownloadSection/DownloadSection';
import StatsCard from '../components/dashboard/StatsCard/StatsCard';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { currentUser, userProfile } = useAuth();
  const licenseStatus = useLicenseStatus();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const stats = [
    {
      title: 'Sinais Hoje',
      value: '12',
      icon: '📊',
      color: '#3498db',
      trend: '+8%'
    },
    {
      title: 'Taxa de Acerto',
      value: '87%',
      icon: '🎯',
      color: '#27ae60',
      trend: '+2%'
    },
    {
      title: 'Lucro Estimado',
      value: 'R$ 1.247',
      icon: '💰',
      color: '#f39c12',
      trend: '+15%'
    },
    {
      title: 'Operações Ativas',
      value: '3',
      icon: '⚡',
      color: '#e74c3c',
      trend: 'stable'
    }
  ];

  if (licenseStatus.loading) {
    return (
      <div className={styles.dashboardLoading}>
        <div className={styles.loadingSpinner}></div>
        <p>Carregando dashboard...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        {/* Header do Dashboard */}
        <div className={styles.dashboardHeader}>
          <div className={styles.welcomeSection}>
            <h1 className={styles.welcomeTitle}>
              {getGreeting()}, {currentUser?.displayName || userProfile?.name || 'Trader'}! 👋
            </h1>
            <p className={styles.welcomeSubtitle}>
              Bem-vindo ao seu painel de controle do MHI Trading Bot
            </p>
          </div>
          
{/*           <div className={styles.quickActions}>
            <button className={styles.actionBtn}>
              <span className={styles.actionIcon}>📈</span>
              <span>Ver Sinais</span>
            </button>
            <button className={styles.actionBtn}>
              <span className={styles.actionIcon}>⚙️</span>
              <span>Configurações</span>
            </button>
          </div> */}
        </div>

        {/* Cards de Estatísticas */}
        {/* <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div> */}

        {/* Seções Principais */}
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <VipStatus />
          </div>
          
          <div className={styles.rightColumn}>
            <DownloadSection />
          </div>
        </div>

        {/* Seção de Atividade Recente */}
{/*         <div className={styles.activitySection}>
          <div className={styles.activityCard}>
            <h3 className={styles.activityTitle}>📋 Atividade Recente</h3>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>🔄</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>Sistema atualizado para v2.1.0</p>
                  <span className={styles.activityTime}>Há 2 horas</span>
                </div>
              </div>
              
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>📈</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>Novo sinal: EUR/USD CALL - Sucesso</p>
                  <span className={styles.activityTime}>Há 3 horas</span>
                </div>
              </div>
              
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>💰</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>Lucro de R$ 89 registrado</p>
                  <span className={styles.activityTime}>Há 5 horas</span>
                </div>
              </div>
              
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>👤</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>Login realizado com sucesso</p>
                  <span className={styles.activityTime}>Há 1 dia</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Seção de Suporte */}
        <div className={styles.supportBanner}>
          <div className={styles.supportContent}>
            <div className={styles.supportIcon}>🎯</div>
            <div className={styles.supportText}>
              <h4 className={styles.supportTitle}>Maximize seus Resultados</h4>
              <p className={styles.supportDescription}>
                Precisa de ajuda para configurar o bot ou tem dúvidas sobre estratégias? 
                Nossa equipe está pronta para ajudar!
              </p>
            </div>
            <div className={styles.supportActions}>
              <a 
                href="http://t.me/msbinaryelite" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.supportBtn}
              >
                <span className={styles.whatsappIcon}>📱</span>
                <span>Suporte Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
