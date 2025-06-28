import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Preencha todos os campos');
      return;
    }
    
    setLoading(true);
    setError('');

    try {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no login:', error);
      
      if (error.code === 'auth/user-not-found') {
        setError('Usuário não encontrado');
      } else if (error.code === 'auth/wrong-password') {
        setError('Senha incorreta');
      } else if (error.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else {
        setError('Erro ao fazer login. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🤖</span>
              <div className={styles.logoText}>
                <h1 className={styles.title}>Bem-vindo de volta!</h1>
                <p className={styles.subtitle}>
                  Acesse sua conta do <strong>MHI Trading Bot</strong>
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className={styles.errorAlert}>
              <span className={styles.errorIcon}>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Senha
              </label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.loadingContent}>
                  <span className={styles.spinner}></span>
                  Entrando...
                </span>
              ) : (
                <span className={styles.btnContent}>
                  <span>Entrar</span>
                  <span className={styles.btnIcon}>🚀</span>
                </span>
              )}
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.registerLink}>
              Não tem uma conta?{' '}
              <Link to="/register" className={styles.link}>
                Criar conta grátis
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.statsCard}>
          <h3 className={styles.statsTitle}>🚀 Junte-se aos nossos usuários</h3>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Usuários Ativos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Taxa de Sucesso</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>$2.8M</span>
              <span className={styles.statLabel}>Lucros Gerados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
