import React from 'react';
import styles from './StatsCard.module.scss';

const StatsCard = ({ title, value, icon, color, trend }) => {
  const getTrendIcon = () => {
    if (trend === 'stable') return '➡️';
    if (trend && trend.startsWith('+')) return '📈';
    if (trend && trend.startsWith('-')) return '📉';
    return '📊';
  };

  const getTrendColor = () => {
    if (trend === 'stable') return '#95a5a6';
    if (trend && trend.startsWith('+')) return '#27ae60';
    if (trend && trend.startsWith('-')) return '#e74c3c';
    return '#3498db';
  };

  return (
    <div className={styles.statsCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer} style={{ backgroundColor: `${color}20` }}>
          <span className={styles.icon} style={{ color: color }}>
            {icon}
          </span>
        </div>
        
        {trend && (
          <div className={styles.trend} style={{ color: getTrendColor() }}>
            <span className={styles.trendIcon}>{getTrendIcon()}</span>
            <span className={styles.trendValue}>{trend}</span>
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value} style={{ color: color }}>
          {value}
        </p>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progress} 
            style={{ 
              backgroundColor: color,
              width: `${Math.random() * 40 + 60}%` // Simular progresso
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
