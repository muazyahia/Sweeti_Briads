import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, className = '', icon }) => {
  return (
    <button 
      className={`${styles.btn} ${styles[variant]} ${className}`} 
      onClick={onClick}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
