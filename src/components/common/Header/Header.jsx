// TODO: Implementar Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './Header.module.scss';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>🤖</div>
          <div className={styles.logoText}>
            <span className={styles.brandName}>MHI Trading Bot</span>
            <span className={styles.brandSubtitle}>by Ms Binary Elite</span>
          </div>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link to="/" className={styles.navLink}>Início</Link>
          {currentUser ? (
            <>
              <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
              <div className={styles.userMenu}>
                <span className={styles.userName}>
                  Olá, {currentUser.displayName || 'Usuário'}
                </span>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Sair
                </button>
              </div>
            </>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className={styles.loginBtn}>Entrar</Link>
              <Link to="/register" className={styles.registerBtn}>Cadastrar</Link>
            </div>
          )}
        </nav>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
