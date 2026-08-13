import React from 'react';
import styles from './ServiceCard.module.css';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, price, image }) => {
  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.priceLabel}>Starting from</p>
        <p className={styles.price}>EGP {price}</p>
        <button className={styles.arrowBtn} aria-label={`View ${title}`}>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
