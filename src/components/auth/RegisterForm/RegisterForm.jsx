import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './RegisterForm.module.scss';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    promoCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Limpar erro quando usuário começar a digitar
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Nome é obrigatório');
      return false;
    }
    
    if (!formData.email.trim()) {
      setError('Email é obrigatório');
      return false;
    }
    
    if (!formData.phone.trim()) {
      setError('Telefone é obrigatório');
      return false;
    }
    
    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError('');

    try {
      await register(formData.email, formData.password, formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro no registro:', error);
      
      // Tratar erros específicos do Firebase
      if (error.code === 'auth/email-already-in-use') {
        setError('Este email já está sendo usado');
      } else if (error.code === 'auth/weak-password') {
        setError('Senha muito fraca');
      } else if (error.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else {
        setError('Erro ao criar conta. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formCard}>
            <div className={styles.header}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>🤖</span>
                <div className={styles.logoText}>
                  <h1 className={styles.title}>Criar Conta</h1>
                  <p className={styles.subtitle}>
                    Junte-se ao <strong>MHI Trading Bot</strong> e comece a lucrar hoje mesmo
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
                <label htmlFor="name" className={styles.label}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
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
                <label htmlFor="phone" className={styles.label}>
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                  Senha *
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

              <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirmar Senha *
                </label>
                <div className={styles.passwordWrapper}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Confirme sua senha"
                    required
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

{/*               <div className={styles.inputGroup}>
                <label htmlFor="promoCode" className={styles.label}>
                  Código Promocional 
                  <span className={styles.optional}>(Opcional)</span>
                </label>
                <input
                  type="text"
                  id="promoCode"
                  name="promoCode"
                  value={formData.promoCode}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Digite seu código promocional"
                />
                <div className={styles.promoHint}>
                  💡 Tem um código promocional? Ganhe benefícios exclusivos!
                </div>
              </div> */}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.loadingContent}>
                    <span className={styles.spinner}></span>
                    Criando conta...
                  </span>
                ) : (
                  <span className={styles.btnContent}>
                    <span>Criar Conta Grátis</span>
                    <span className={styles.btnIcon}>🚀</span>
                  </span>
                )}
              </button>
            </form>

            <div className={styles.footer}>
              <p className={styles.loginLink}>
                Já tem uma conta?{' '}
                <Link to="/login" className={styles.link}>
                  Fazer Login
                </Link>
              </p>
            </div>
          </div>

          <div className={styles.benefitsCard}>
            <h3 className={styles.benefitsTitle}>🎁 Ao se cadastrar você ganha:</h3>
            <ul className={styles.benefitsList}>
              <li className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>7 dias de teste grátis</span>
              </li>
              <li className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Acesso aos sinais básicos</span>
              </li>
              <li className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Suporte via Telegram</span>
              </li>
              <li className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Tutorial completo</span>
              </li>
              <li className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Comunidade exclusiva</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
