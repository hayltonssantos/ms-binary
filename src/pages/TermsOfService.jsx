import React from 'react';
import styles from './LegalPages.module.scss';

const TermsOfService = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Termos de Uso</h1>
          <p className={styles.lastUpdated}>Última atualização: 28 de junho de 2025</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o MHI Trading Bot by Ms Binary Elite, você concorda em cumprir 
              e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte 
              destes termos, não deve usar nosso serviço.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Descrição do Serviço</h2>
            <p>
              O MHI Trading Bot é um software de trading automatizado que fornece sinais e 
              executa operações em mercados financeiros. O serviço inclui:
            </p>
            <ul>
              <li>Sinais de trading automatizados</li>
              <li>Análise técnica automatizada</li>
              <li>Execução automática de operações</li>
              <li>Relatórios de performance</li>
              <li>Suporte técnico</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Elegibilidade</h2>
            <p>
              Para usar nosso serviço, você deve:
            </p>
            <ul>
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Possuir capacidade legal para celebrar contratos</li>
              <li>Não estar localizado em jurisdições onde o trading é proibido</li>
              <li>Fornecer informações precisas e atualizadas</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Conta do Usuário</h2>
            <p>
              Você é responsável por:
            </p>
            <ul>
              <li>Manter a confidencialidade de suas credenciais de login</li>
              <li>Todas as atividades que ocorrem em sua conta</li>
              <li>Notificar-nos imediatamente sobre uso não autorizado</li>
              <li>Fornecer informações precisas durante o registro</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Licença de Uso</h2>
            <p>
              Concedemos a você uma licença limitada, não exclusiva e não transferível para 
              usar o MHI Trading Bot de acordo com estes termos. Você não pode:
            </p>
            <ul>
              <li>Copiar, modificar ou distribuir o software</li>
              <li>Fazer engenharia reversa do código</li>
              <li>Usar o serviço para atividades ilegais</li>
              <li>Compartilhar sua licença com terceiros</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Riscos do Trading</h2>
            <div className={styles.warningBox}>
              <h3>⚠️ AVISO IMPORTANTE DE RISCO</h3>
              <p>
                O trading de instrumentos financeiros envolve riscos significativos. Você pode 
                perder todo o capital investido. Resultados passados não garantem resultados futuros.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>7. Limitação de Responsabilidade</h2>
            <p>
              A Ms Binary Elite não se responsabiliza por:
            </p>
            <ul>
              <li>Perdas financeiras decorrentes do uso do software</li>
              <li>Interrupções no serviço ou falhas técnicas</li>
              <li>Decisões de investimento baseadas em nossos sinais</li>
              <li>Problemas com corretoras de terceiros</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Pagamentos e Reembolsos</h2>
            <p>
              Todos os pagamentos são processados de forma segura. Política de reembolso:
            </p>
            <ul>
              <li>Reembolso integral em até 7 dias após a compra</li>
              <li>Reembolso proporcional para cancelamentos antecipados</li>
              <li>Não há reembolso por perdas de trading</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a publicação. 
              O uso continuado do serviço constitui aceitação dos novos termos.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contato</h2>
            <p>
              Para dúvidas sobre estes termos, entre em contato:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> swarleysenterprise@gmail.com</p>
              <p><strong>Telegram:</strong> <a href="https://t.me/msbinaryelite">Fale Conosco</a></p>
              <p><strong>Endereço:</strong> Rio de Janeiro, RJ - Brasil</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
