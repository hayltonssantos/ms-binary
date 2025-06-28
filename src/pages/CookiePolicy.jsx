import React from 'react';
import styles from './LegalPages.module.scss';

const CookiePolicy = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Política de Cookies</h1>
          <p className={styles.lastUpdated}>Última atualização: 28 de junho de 2025</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando 
              você visita um site. Eles permitem que o site "lembre" de suas ações e 
              preferências ao longo do tempo.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Como Usamos Cookies</h2>
            <p>
              O MHI Trading Bot utiliza cookies para:
            </p>
            <ul>
              <li>Manter você logado em sua conta</li>
              <li>Lembrar suas configurações e preferências</li>
              <li>Analisar como você usa nosso site</li>
              <li>Melhorar a performance e funcionalidade</li>
              <li>Personalizar sua experiência</li>
              <li>Fornecer recursos de segurança</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Tipos de Cookies que Utilizamos</h2>
            
            <h3>Cookies Essenciais</h3>
            <p>
              Necessários para o funcionamento básico do site:
            </p>
            <ul>
              <li><strong>Autenticação:</strong> Mantêm você logado</li>
              <li><strong>Segurança:</strong> Protegem contra ataques</li>
              <li><strong>Preferências:</strong> Lembram suas configurações</li>
            </ul>

            <h3>Cookies de Performance</h3>
            <p>
              Coletam informações sobre como você usa o site:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Análise de tráfego</li>
              <li><strong>Monitoramento:</strong> Performance do site</li>
              <li><strong>Erros:</strong> Identificação de problemas</li>
            </ul>

            <h3>Cookies de Funcionalidade</h3>
            <p>
              Melhoram a experiência do usuário:
            </p>
            <ul>
              <li><strong>Idioma:</strong> Lembram sua preferência de idioma</li>
              <li><strong>Layout:</strong> Salvam configurações de interface</li>
              <li><strong>Histórico:</strong> Mantêm histórico de navegação</li>
            </ul>

            <h3>Cookies de Marketing</h3>
            <p>
              Utilizados para publicidade direcionada:
            </p>
            <ul>
              <li><strong>Facebook Pixel:</strong> Anúncios personalizados</li>
              <li><strong>Google Ads:</strong> Remarketing</li>
              <li><strong>Tracking:</strong> Acompanhamento de conversões</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Cookies Específicos Utilizados</h2>
            <div className={styles.cookieTable}>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Duração</th>
                    <th>Finalidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>auth_token</td>
                    <td>Essencial</td>
                    <td>7 dias</td>
                    <td>Autenticação do usuário</td>
                  </tr>
                  <tr>
                    <td>user_preferences</td>
                    <td>Funcionalidade</td>
                    <td>30 dias</td>
                    <td>Configurações pessoais</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Performance</td>
                    <td>2 anos</td>
                    <td>Google Analytics</td>
                  </tr>
                  <tr>
                    <td>_fbp</td>
                    <td>Marketing</td>
                    <td>90 dias</td>
                    <td>Facebook Pixel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.section}>
            <h2>5. Cookies de Terceiros</h2>
            <p>
              Utilizamos serviços de terceiros que podem definir cookies:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Análise de tráfego</li>
              <li><strong>Facebook:</strong> Integração social e publicidade</li>
              <li><strong>Hotjar:</strong> Análise de comportamento</li>
              <li><strong>Stripe:</strong> Processamento de pagamentos</li>
              <li><strong>Intercom:</strong> Chat de suporte</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Gerenciamento de Cookies</h2>
            <p>
              Você pode controlar cookies através de:
            </p>

            <h3>Configurações do Navegador</h3>
            <ul>
              <li><strong>Chrome:</strong> Configurações → Privacidade → Cookies</li>
              <li><strong>Firefox:</strong> Opções → Privacidade → Cookies</li>
              <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
              <li><strong>Edge:</strong> Configurações → Cookies e permissões</li>
            </ul>

            <h3>Ferramentas de Opt-out</h3>
            <ul>
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
              <li><a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Impacto da Desabilitação</h2>
            <div className={styles.warningBox}>
              <h3>⚠️ Importante</h3>
              <p>
                Desabilitar cookies pode afetar a funcionalidade do site:
              </p>
              <ul>
                <li>Você pode ser deslogado automaticamente</li>
                <li>Configurações não serão salvas</li>
                <li>Algumas funcionalidades podem não funcionar</li>
                <li>A experiência pode ser prejudicada</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>8. Cookies em Dispositivos Móveis</h2>
            <p>
              Em dispositivos móveis, você pode gerenciar cookies através de:
            </p>
            <ul>
              <li>Configurações do navegador móvel</li>
              <li>Configurações de privacidade do dispositivo</li>
              <li>Aplicativos de gerenciamento de privacidade</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Atualizações desta Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Mudanças significativas 
              serão comunicadas através de:
            </p>
            <ul>
              <li>Notificação no site</li>
              <li>Email para usuários registrados</li>
              <li>Banner de aviso</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. Contato</h2>
            <p>
              Para questões sobre cookies:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> privacy@msbinaryelite.com</p>
              <p><strong>WhatsApp:</strong> +55 11 99999-9999</p>
              <p><strong>Suporte:</strong> suporte@msbinaryelite.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
