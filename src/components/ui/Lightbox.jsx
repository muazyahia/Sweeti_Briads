"use client";

import React, { useEffect } from 'react';
import styles from './Lightbox.module.css';

const Lightbox = ({ isOpen, imageSrc, onClose, onNext, onPrev }) => {
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Swipe logic
  let touchStartX = 0;
  const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;
    if (delta > 50 && onPrev) onPrev();
    if (delta < -50 && onNext) onNext();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <span className={styles.closeBtn} onClick={onClose}>&times;</span>
      
      {onPrev && <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); onPrev(); }}>&#10094;</button>}
      
      <div 
        className={styles.contentWrapper} 
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img key={imageSrc} src={imageSrc} alt="Zoomed Poster" className={styles.image} />
      </div>

      {onNext && <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); onNext(); }}>&#10095;</button>}
    </div>
  );
};

export default Lightbox;
