import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🤖</span>
              <span>Trading Bot Automatizado</span>
            </div>
            
            <h1 className={styles.title}>
              <span className={styles.highlight}>MHI Trading Bot</span>
              <br />
              by Ms Binary Elite
            </h1>
            
            <p className={styles.subtitle}>
              Maximize seus lucros com nosso robô de trading automatizado. 
              Sinais precisos, execução rápida e resultados comprovados no mercado financeiro.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>⚡</span>
                <span>Execução Automática</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📈</span>
                <span>Sinais Precisos</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🔒</span>
                <span>100% Seguro</span>
              </div>
            </div>

            <div className={styles.buttons}>
              <Link to="/register" className={styles.primaryBtn}>
                <span>Começar Agora - Grátis</span>
                <span className={styles.btnIcon}>🚀</span>
              </Link>
              <Link to="/dashboard" className={styles.secondaryBtn}>
                <span className={styles.downloadIcon}>📱</span>
                <span>Área do Cliente</span>
              </Link>
            </div>

            <div className={styles.trust}>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>150+</span>
                  <span className={styles.statLabel}>Usuários Ativos</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>95%</span>
                  <span className={styles.statLabel}>Taxa de Sucesso</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Suporte</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.phoneContainer}>
              <div className={styles.phone}>
                <div className={styles.screen}>
                  <div className={styles.appInterface}>
                    <div className={styles.appHeader}>
                      <div className={styles.appLogo}>MHI Bot</div>
                      <div className={styles.status}>
                        <span className={styles.statusDot}></span>
                        <span>Online</span>
                      </div>
                    </div>
                    
                    <div className={styles.chart}>
                      <div className={styles.chartLine}></div>
                      <div className={styles.chartGlow}></div>
                    </div>
                    
                    <div className={styles.signals}>
                      <div className={styles.signal}>
                        <span className={styles.pair}>EUR/USD</span>
                        <span className={styles.action}>📈 CALL</span>
                        <span className={styles.profit}>+$127</span>
                      </div>
                      <div className={styles.signal}>
                        <span className={styles.pair}>GBP/JPY</span>
                        <span className={styles.action}>📉 PUT</span>
                        <span className={styles.profit}>+$89</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.floatingCard}>
                <div className={styles.cardContent}>
                  <span className={styles.cardIcon}>💰</span>
                  <div className={styles.cardInfo}>
                    <div className={styles.cardTitle}>Lucro Hoje</div>
                    <div className={styles.cardValue}>$2,847</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
