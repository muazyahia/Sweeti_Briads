import React from 'react';
import styles from './Decorative.module.css';

export const HaloGlow = ({ className = '', style = {} }) => {
  return <div className={`${styles.haloGlow} ${className}`} style={style} />;
};

export const CurvedNeonLine = ({ className = '' }) => {
  return (
    <div className={`${styles.neonLineContainer} ${className}`}>
      <div className={styles.neonLine}></div>
    </div>
  );
};
