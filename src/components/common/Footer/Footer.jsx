// TODO: Implementar Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🤖</span>
              <div className={styles.logoText}>
                <span className={styles.brandName}>MHI Trading Bot</span>
                <span className={styles.brandSubtitle}>by Ms Binary Elite</span>
              </div>
            </div>
            <p className={styles.brandDescription}>
              Tecnologia avançada para maximizar seus lucros no trading automatizado. 
              Junte-se a milhares de traders que confiam em nossa solução.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <span>📱</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <span>📧</span>
              </a>
              <a href="#" className={styles.socialLink}>
                <span>🌐</span>
              </a>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Produto</h4>
              <ul className={styles.linkList}>
                <li><Link to="/" className={styles.link}>Início</Link></li>
                <li><Link to="/register" className={styles.link}>Criar Conta</Link></li>
                <li><Link to="/dashboard" className={styles.link}>Dashboard</Link></li>
                <li><a href="#" className={styles.link}>Preços</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Suporte</h4>
              <ul className={styles.linkList}>
                <li><a href="https://t.me/msbinaryelite" className={styles.link}>Central de Ajuda</a></li>
                <li><a href="#" className={styles.link}>Tutoriais</a></li>
                <li><a href="https://t.me/msbinaryelite" className={styles.link}>Telegram</a></li>
                <li><a href="mailto:swarleysenterprise@gmail.com" className={styles.link}>Email</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <ul className={styles.linkList}>
                <li><a href="/terms" className={styles.link}>Termos de Uso</a></li>
                <li><a href="/privacy" className={styles.link}>Política de Privacidade</a></li>
                <li><a href="/risk" className={styles.link}>Aviso de Risco</a></li>
                <li><a href="/cookies" className={styles.link}>Cookies</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Contato</h4>
              <div className={styles.contactInfo}>
                {/* <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📱</span>
                  <span>+55 11 99999-9999</span>
                </div> */}
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>swarleysenterprise@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🕒</span>
                  <span>Seg-Sex: 9h às 20h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} Ms Binary Elite. Todos os direitos reservados.</p>
          </div>
          <div className={styles.disclaimer}>
            <p>
              ⚠️ Trading envolve riscos. Nunca invista mais do que pode perder.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
