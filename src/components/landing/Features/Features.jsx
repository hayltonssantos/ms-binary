import React from 'react';
import styles from './Features.module.scss';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'Trading Automatizado',
      description: 'Robô inteligente que opera 24/7 sem intervenção humana, maximizando oportunidades de lucro.'
    },
    {
      icon: '📊',
      title: 'Sinais Precisos',
      description: 'Algoritmos avançados analisam o mercado em tempo real para gerar sinais com alta taxa de acerto.'
    },
    {
      icon: '⚡',
      title: 'Execução Rápida',
      description: 'Latência ultra-baixa garante que suas operações sejam executadas no momento ideal.'
    },
/*     {
      icon: '🔒',
      title: 'Segurança Total',
      description: 'Criptografia de ponta e protocolos de segurança para proteger seus investimentos.'
    }, */
/*     {
      icon: '📱',
      title: 'Multi-Plataforma',
      description: 'Funciona em Windows, Android e iOS. Trade de qualquer lugar, a qualquer hora.'
    }, */
    {
      icon: '📈',
      title: 'Análise Avançada',
      description: 'Relatórios detalhados e métricas de performance para otimizar seus resultados.'
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Por que escolher o MHI Trading Bot?</h2>
          <p className={styles.subtitle}>
            Tecnologia de ponta que transforma sua experiência de trading
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>
                {feature.title}
              </h3>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Pronto para começar?</h3>
            <p className={styles.ctaDescription}>
              Junte-se aos traders que já estão lucrando com o MHI Trading Bot
            </p>
            <div className={styles.ctaButtons}>
              <a href="/register" className={styles.ctaBtn}>
                Começar Agora - Grátis
              </a>
              <a href="/dashboard" className={styles.ctaSecondary}>
                Ver Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
