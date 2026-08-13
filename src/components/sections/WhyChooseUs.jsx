"use client";

import React, { useState } from 'react';
import styles from './WhyChooseUs.module.css';
import { Search } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import Lightbox from '../ui/Lightbox';

const WhyChooseUs = () => {
  const wrapperRef = useScrollReveal();
  const [lightboxData, setLightboxData] = useState({ isOpen: false, src: '' });
  const { t } = useLanguage();

  const brandColors = [
    { name: 'Light Pink', hex: '#F7C1D2' },
    { name: 'Med Pink', hex: '#E9A8B8' },
    { name: 'Soft Blush', hex: '#FBE7EC' },
    { name: 'Dusty Rose', hex: '#D4A49A' },
    { name: 'Mahogany', hex: '#8B5E58' },
    { name: 'Gold Foil', hex: '#D4AF37' }
  ];

  const brandBoardImg = '/assets/761e4913-3233-4faf-abae-33f10a879e76.png';

  return (
    <section className="section" id="about">
      <div className="container">
        <div ref={wrapperRef} className={`glass-card ${styles.wrapper} reveal-fade-up`}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              {t('about-sub')}
            </div>
            
            <h2 className={styles.title}>{t('about-title')}</h2>
            
            <p className={styles.desc}>{t('about-desc-1')}</p>
            <p className={styles.desc}>{t('about-desc-2')}</p>
            
            <div className={styles.paletteShowcase}>
              <span className={styles.paletteTitle}>Brand Color Palette:</span>
              <div className={styles.colorsRow}>
                {brandColors.map(color => (
                  <div 
                    key={color.hex} 
                    className={styles.colorSwatch} 
                    style={{backgroundColor: color.hex}} 
                    title={color.hex}
                  >
                    <span>{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.visualColumn}>
            <div 
              className={styles.brandBoardFrame} 
              onClick={() => setLightboxData({ isOpen: true, src: brandBoardImg })}
            >
              <img src={brandBoardImg} alt="Brand Board" />
              <div className={styles.zoomBadge}>
                <Search size={16} /> Inspect Brand Book
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Lightbox 
        isOpen={lightboxData.isOpen} 
        imageSrc={lightboxData.src} 
        onClose={() => setLightboxData({ isOpen: false, src: '' })} 
      />
    </section>
  );
};

export default WhyChooseUs;
