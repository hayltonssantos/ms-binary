import React from 'react';
import styles from './LegalPages.module.scss';

const PrivacyPolicy = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Política de Privacidade</h1>
          <p className={styles.lastUpdated}>Última atualização: 28 de junho de 2025</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Informações que Coletamos</h2>
            <p>
              Coletamos as seguintes informações quando você usa o MHI Trading Bot:
            </p>
            
            <h3>Informações Pessoais</h3>
            <ul>
              <li>Nome</li>
              <li>Endereço de email</li>
              <li>Número de telefone</li>
            </ul>

            <h3>Informações de Uso</h3>
            <ul>
              <li>Dados de navegação no site</li>
              <li>Configurações do software</li>
              <li>Logs de sistema e erros</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Como Usamos suas Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul>
              <li>Gerenciar sua conta</li>
              <li>Enviar atualizações e comunicações importantes</li>
              <li>Oferecer suporte técnico</li>
              <li>Cumprir obrigações legais</li>
              <li>Prevenir fraudes e atividades maliciosas</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais, exceto:
            </p>
            <ul>
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais</li>
              <li>Com provedores de serviços terceirizados (sob acordo de confidencialidade)</li>
              <li>Em caso de fusão, aquisição ou venda de ativos</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Cookies e Tecnologias Similares</h2>
            <p>
              Utilizamos cookies para:
            </p>
            <ul>
              <li>Manter você logado em sua conta</li>
              <li>Lembrar suas preferências</li>
              <li>Analisar o uso do site</li>
              <li>Melhorar a experiência do usuário</li>
            </ul>
            <p>
              Você pode controlar o uso de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança para proteger suas informações:
            </p>
            <ul>
              <li>Criptografia SSL/TLS para transmissão de dados</li>
              <li>Armazenamento seguro em servidores protegidos</li>
              <li>Acesso restrito às informações pessoais</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares e seguros</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Seus Direitos</h2>
            <p>
              Você tem o direito de:
            </p>
            <ul>
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar exclusão de seus dados</li>
              <li>Portabilidade dos dados</li>
              <li>Retirar consentimento a qualquer momento</li>
              <li>Apresentar reclamações às autoridades competentes</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Retenção de Dados</h2>
            <p>
              Mantemos suas informações pelo tempo necessário para:
            </p>
            <ul>
              <li>Fornecer nossos serviços</li>
              <li>Cumprir obrigações legais</li>
              <li>Resolver disputas</li>
              <li>Aplicar nossos acordos</li>
            </ul>
            <p>
              Dados de trading podem ser mantidos por até 5 anos para fins regulatórios.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Transferências Internacionais</h2>
            <p>
              Seus dados podem ser transferidos e processados em países fora do Brasil. 
              Garantimos que todas as transferências atendem aos padrões de proteção adequados.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Menores de Idade</h2>
            <p>
              Nossos serviços não são destinados a menores de 18 anos. Não coletamos 
              intencionalmente informações de menores de idade.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contato</h2>
            <p>
              Para questões sobre privacidade, entre em contato:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> swarleysenterprise@gmail.com</p>
              <p><strong>Telegram:</strong> <a href="https://t.me/msbinaryelite">Fale Conosco</a></p>
              <p><strong>DPO:</strong> dpo@msbinaryelite.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
