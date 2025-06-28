import React from 'react';
import styles from './Stats.module.scss';

const Stats = () => {
  const stats = [
    {
      number: '150+',
      label: 'Usuários Ativos',
      icon: '👥',
      description: 'Traders confiando em nossa tecnologia'
    },
    {
      number: '95%',
      label: 'Taxa de Sucesso',
      icon: '🎯',
      description: 'Precisão comprovada em operações'
    },
/*     {
      number: 'R$ 150+',
      label: 'Lucros Gerados',
      icon: '💰',
      description: 'Total de lucros dos nossos usuários'
    }, */
    {
      number: '24/7',
      label: 'Operação Contínua',
      icon: '⚡',
      description: 'Bot funcionando sem parar'
    }
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Resultados que Impressionam</h2>
          <p className={styles.subtitle}>
            Números reais de uma comunidade que lucra todos os dias
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>
                {stat.icon}
              </div>
              <div className={styles.statNumber}>
                {stat.number}
              </div>
              <div className={styles.statLabel}>
                {stat.label}
              </div>
              <div className={styles.statDescription}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.testimonialSection}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialText}>
                "Em apenas 3 meses usando o MHI Trading Bot, consegui recuperar meu investimento 
                inicial e ainda estou lucrando consistentemente. A tecnologia é impressionante!"
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>👨‍💼</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>Carlos Silva</span>
                  <span className={styles.authorTitle}>Trader há 2 anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
