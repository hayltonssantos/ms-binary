import React, { useState } from 'react';
import { useLicenseStatus } from '../../../hooks/useLicenseStatus';
import { useLicenseUser } from '../../../contexts/LicenseUserContext';
import styles from './DownloadSection.module.scss';

const DownloadSection = () => {
  const licenseStatus = useLicenseStatus();
  const { userLicense, userEmail } = useLicenseUser();
  const [downloading, setDownloading] = useState(false);

  const canDownload = () => {
    return licenseStatus.isActive && 
           (licenseStatus.downloadsRemaining > 0 || licenseStatus.downloadsRemaining === -1);
  };

  const handleDownload = async (platform) => {
    if (!canDownload()) return;

    setDownloading(true);

    try {
      // Simular download - aqui você implementaria a lógica real
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Registrar download (implementar na lógica real)
      console.log(`Download iniciado para ${platform}`);
      
      // Aqui você faria o download real do arquivo
      const downloadUrl = getDownloadUrl(platform);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `MHI-Trading-Bot-${platform}.exe`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Erro no download:', error);
    } finally {
      setDownloading(false);
    }
  };

  const getDownloadUrl = (platform) => {
    // URLs dos arquivos de download (implementar conforme sua estrutura)
    const urls = {
      windows: '/downloads/MHI-Trading-Bot-Windows.exe',
      android: '/downloads/MHI-Trading-Bot-Android.apk',
      mac: '/downloads/MHI-Trading-Bot-Mac.dmg'
    };
    return urls[platform] || urls.windows;
  };

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      icon: '🖥️',
      description: 'Windows 10/11 (64-bit)',
      size: '45.2 MB',
      version: 'v2.1.0'
    },
/*     {
      id: 'android',
      name: 'Android',
      icon: '📱',
      description: 'Android 7.0+',
      size: '28.5 MB',
      version: 'v2.1.0'
    },
    {
      id: 'mac',
      name: 'macOS',
      icon: '🍎',
      description: 'macOS 10.15+',
      size: '52.1 MB',
      version: 'v2.1.0'
    } */
  ];

  return (
    <div className={styles.downloadSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>📱 Download do MHI Trading Bot</h2>
        <p className={styles.subtitle}>
          Baixe nossa aplicação e comece a lucrar com trading automatizado
        </p>
      </div>

      {!licenseStatus.isActive && (
        <div className={styles.warningCard}>
          <div className={styles.warningIcon}>⚠️</div>
          <div className={styles.warningContent}>
            <h3 className={styles.warningTitle}>Licença Expirada</h3>
            <p className={styles.warningText}>
              Sua licença expirou. Renove ou faça upgrade para continuar usando o MHI Trading Bot.
            </p>
          </div>
        </div>
      )}

      {licenseStatus.isActive && licenseStatus.downloadsRemaining === 0 && (
        <div className={styles.warningCard}>
          <div className={styles.warningIcon}>📵</div>
          <div className={styles.warningContent}>
            <h3 className={styles.warningTitle}>Limite de Downloads Atingido</h3>
            <p className={styles.warningText}>
              Você atingiu o limite de downloads da sua licença. Faça upgrade para VIP e tenha downloads ilimitados.
            </p>
          </div>
        </div>
      )}

      <div className={styles.downloadInfo}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>📊</div>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>Downloads Restantes</h4>
            <p className={styles.infoValue}>
              {licenseStatus.downloadsRemaining === -1 ? 'Ilimitado' : licenseStatus.downloadsRemaining}
            </p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>🔄</div>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>Última Versão</h4>
            <p className={styles.infoValue}>v3.0.0</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>📅</div>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>Atualizado em</h4>
            <p className={styles.infoValue}>24/06/2025</p>
          </div>
        </div>
      </div>

      <div className={styles.platformsGrid}>
        {platforms.map((platform) => (
          <div key={platform.id} className={styles.platformCard}>
            <div className={styles.platformHeader}>
              <div className={styles.platformIcon}>{platform.icon}</div>
              <div className={styles.platformInfo}>
                <h3 className={styles.platformName}>{platform.name}</h3>
                <p className={styles.platformDescription}>{platform.description}</p>
              </div>
            </div>

            <div className={styles.platformDetails}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Tamanho:</span>
                <span className={styles.detailValue}>{platform.size}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Versão:</span>
                <span className={styles.detailValue}>{platform.version}</span>
              </div>
            </div>

            <button
              className={`${styles.downloadBtn} ${!canDownload() ? styles.disabled : ''}`}
              onClick={() => handleDownload(platform.id)}
              disabled={!canDownload() || downloading}
            >
              {downloading ? (
                <span className={styles.downloadingContent}>
                  <span className={styles.spinner}></span>
                  Baixando...
                </span>
              ) : (
                <span className={styles.downloadContent}>
                  <span className={styles.downloadIcon}>⬇️</span>
                  <span>Download</span>
                </span>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className={styles.instructions}>
        <h3 className={styles.instructionsTitle}>📋 Instruções de Instalação</h3>
        <div className={styles.instructionsList}>
          <div className={styles.instruction}>
            <span className={styles.stepNumber}>1</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Download</h4>
              <p className={styles.stepDescription}>
                Clique no botão de download da plataforma desejada
              </p>
            </div>
          </div>

          <div className={styles.instruction}>
            <span className={styles.stepNumber}>2</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Instalação</h4>
              <p className={styles.stepDescription}>
                Execute o arquivo baixado e siga as instruções na tela
              </p>
            </div>
          </div>

          <div className={styles.instruction}>
            <span className={styles.stepNumber}>3</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Ativação</h4>
              <p className={styles.stepDescription}>
                Acesse somente com seu email cadastrado: <code>{userEmail}</code>
              </p>
            </div>
          </div>

          <div className={styles.instruction}>
            <span className={styles.stepNumber}>4</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Configuração</h4>
              <p className={styles.stepDescription}>
                Configure sua corretora e comece a lucrar!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.supportSection}>
        <div className={styles.supportCard}>
          <div className={styles.supportIcon}>💬</div>
          <div className={styles.supportContent}>
            <h4 className={styles.supportTitle}>Precisa de Ajuda?</h4>
            <p className={styles.supportText}>
              Nossa equipe está pronta para ajudar você com a instalação e configuração
            </p>
            <div className={styles.supportButtons}>
              <a 
                href="http://t.me/msbinaryelite" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <span className={styles.whatsappIcon}>📱</span>
                <span>Telegram</span>
              </a>
              <a 
                href="mailto:swarleysenterprise@gmail.com"
                className={styles.emailBtn}
              >
                <span className={styles.emailIcon}>📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
