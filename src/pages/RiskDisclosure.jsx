import React from 'react';
import styles from './LegalPages.module.scss';

const RiskDisclosure = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Aviso de Risco</h1>
          <p className={styles.lastUpdated}>Última atualização: 28 de junho de 2025</p>
        </div>

        <div className={styles.content}>
          <div className={styles.criticalWarning}>
            <h2>⚠️ AVISO CRÍTICO DE RISCO</h2>
            <p>
              <strong>O TRADING DE INSTRUMENTOS FINANCEIROS ENVOLVE RISCOS SIGNIFICATIVOS 
              E PODE RESULTAR NA PERDA TOTAL DO CAPITAL INVESTIDO.</strong>
            </p>
          </div>

          <section className={styles.section}>
            <h2>1. Natureza dos Riscos</h2>
            <p>
              O trading em mercados financeiros, incluindo forex, ações, commodities e 
              criptomoedas, é altamente especulativo e envolve riscos substanciais:
            </p>
            <ul>
              <li><strong>Risco de Perda Total:</strong> Você pode perder todo o dinheiro investido</li>
              <li><strong>Volatilidade:</strong> Preços podem mudar rapidamente e de forma imprevisível</li>
              <li><strong>Alavancagem:</strong> Pode amplificar tanto ganhos quanto perdas</li>
              <li><strong>Risco de Liquidez:</strong> Dificuldade para fechar posições</li>
              <li><strong>Risco de Mercado:</strong> Condições econômicas podem afetar resultados</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Sobre o MHI Trading Bot</h2>
            <p>
              O MHI Trading Bot é uma ferramenta de automação que:
            </p>
            <ul>
              <li>Fornece sinais baseados em análise automática</li>
              <li>Executa operações automaticamente (quando configurado)</li>
              <li>Não garante lucros ou resultados específicos</li>
              <li>Pode apresentar falhas técnicas ou erros</li>
            </ul>

            <div className={styles.warningBox}>
              <h3>🚨 IMPORTANTE</h3>
              <p>
                Nenhum sistema de trading automatizado é infalível. Resultados passados 
                não garantem resultados futuros.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Fatores de Risco Específicos</h2>
            
            <h3>Risco Tecnológico</h3>
            <ul>
              <li>Falhas de software ou hardware</li>
              <li>Problemas de conectividade com a internet</li>
              <li>Erros nos algoritmos de trading</li>
              <li>Ataques cibernéticos ou violações de segurança</li>
            </ul>

            <h3>Risco de Mercado</h3>
            <ul>
              <li>Mudanças nas condições econômicas</li>
              <li>Eventos geopolíticos</li>
              <li>Alterações regulatórias</li>
              <li>Manipulação de mercado</li>
            </ul>

            <h3>Risco Operacional</h3>
            <ul>
              <li>Erros na configuração do bot</li>
              <li>Problemas com a corretora</li>
              <li>Execução incorreta de ordens</li>
              <li>Slippage e spreads</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Responsabilidades do Usuário</h2>
            <p>
              Ao usar o MHI Trading Bot, você reconhece que:
            </p>
            <ul>
              <li>Compreende completamente os riscos envolvidos</li>
              <li>Possui conhecimento adequado sobre trading</li>
              <li>Tem capacidade financeira para suportar perdas</li>
              <li>Tomará suas próprias decisões de investimento</li>
              <li>Não investirá dinheiro que não pode perder</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Limitações do Serviço</h2>
            <p>
              O MHI Trading Bot:
            </p>
            <ul>
              <li>Não é um consultor de investimentos</li>
              <li>Não oferece garantias de lucro</li>
              <li>Não substitui o julgamento humano</li>
              <li>Pode apresentar períodos de baixa performance</li>
              <li>Requer monitoramento e ajustes constantes</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Recomendações Importantes</h2>
            <div className={styles.recommendationsBox}>
              <h3>📋 ANTES DE COMEÇAR</h3>
              <ul>
                <li>Teste o sistema em conta demo primeiro</li>
                <li>Comece com valores pequenos</li>
                <li>Diversifique seus investimentos</li>
                <li>Estabeleça limites de perda</li>
                <li>Monitore regularmente suas operações</li>
                <li>Busque educação financeira contínua</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>7. Jurisdições Restritas</h2>
            <p>
              Nossos serviços podem não estar disponíveis em certas jurisdições. 
              É sua responsabilidade verificar se o trading é legal em sua região.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Isenção de Responsabilidade</h2>
            <p>
              A Ms Binary Elite não se responsabiliza por:
            </p>
            <ul>
              <li>Perdas financeiras de qualquer natureza</li>
              <li>Decisões de investimento baseadas em nossos sinais</li>
              <li>Problemas técnicos ou falhas do sistema</li>
              <li>Ações de terceiros (corretoras, provedores, etc.)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Busca por Aconselhamento</h2>
            <p>
              Recomendamos fortemente que você:
            </p>
            <ul>
              <li>Consulte um consultor financeiro independente</li>
              <li>Avalie sua situação financeira pessoal</li>
              <li>Considere seus objetivos de investimento</li>
              <li>Entenda completamente os produtos financeiros</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. Contato</h2>
            <p>
              Para esclarecimentos sobre riscos:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> swarleysenterprise@gmail.com</p>
              <p><strong>Telegram:</strong> <a href="https://t.me/msbinaryelite">Fale Conosco</a></p>
              <p><strong>Suporte:</strong>  <a href="https://t.me/msbinaryelite">Suporte</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RiskDisclosure;
