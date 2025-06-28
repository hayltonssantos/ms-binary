import React from 'react';
import styles from './Loading.module.scss';

const Loading = ({ message = 'Carregando...' }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.container}>
        <div className={styles.spinner}>
          <div className={styles.robot}>🤖</div>
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Loading;
