"use client";

import React, { useState, useEffect } from 'react';
import styles from './SignatureStyles.module.css';
import { Star, Search } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import Lightbox from '../ui/Lightbox';
import Button from '../ui/Button';
import { fetchApi } from '../../lib/api';



const SignatureStyles = () => {
  const headerRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxData, setLightboxData] = useState({ isOpen: false, src: '' });
  const { t, lang } = useLanguage();
  const [apiStyles, setApiStyles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStyles = async () => {
      try {
        const data = await fetchApi('/styles');
        if (data && data.length > 0) {
          setApiStyles(data);
        }
      } catch (err) {
        console.error('Failed to load styles', err);
      } finally {
        setLoading(false);
      }
    };
    loadStyles();
    const timer = setInterval(loadStyles, 15000);
    return () => clearInterval(timer);
  }, []);

  const handleDeepLink = (styleName) => {
    const el = document.getElementById('booking');
    if (el) {
      const navbarHeight = 80;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navbarHeight, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (apiStyles.length > 0) {
      setActiveTab((activeTab + 1) % apiStyles.length);
    }
  };

  const handlePrev = () => {
    if (apiStyles.length > 0) {
      setActiveTab((activeTab - 1 + apiStyles.length) % apiStyles.length);
    }
  };

  let touchStartX = 0;
  const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;
    if (delta > 50) handlePrev();
    if (delta < -50) handleNext();
  };

  if (loading || apiStyles.length === 0) {
    return <section className="section" id="services"><div className="container" style={{textAlign: 'center', padding: '100px 0'}}>Loading styles...</div></section>;
  }

  const activeContent = apiStyles[activeTab];
  const modelImg = activeContent.modelImage || '';
  const posterImg = activeContent.posterImage || '';

  return (
    <section className="section" id="services" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal-fade-up`}>
          <div className={styles.titleWrapper}>
            <span className={styles.subtitle}>{t('styles-sub')}</span>
            <h2 className={styles.title}>{t('styles-title')}</h2>
            <p className={styles.desc}>{t('styles-desc')}</p>
          </div>
        </div>

        <div className={styles.tabs}>
          {apiStyles.map((style, index) => (
            <button 
              key={style._id} 
              className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {lang === 'ar' && style.nameAr ? style.nameAr : style.name}
            </button>
          ))}
        </div>

        <div className={styles.showcase}>
          <div key={`${activeContent._id}-media`} className={styles.mediaLayout}>
            <div className={`${styles.portraitCard} ${styles.floatingImage}`}>
              <img src={modelImg} alt={activeContent.name} />
            </div>
            <div className={styles.posterCard} onClick={() => setLightboxData({ isOpen: true, src: posterImg })}>
              <span className={styles.posterBadge}>Full Poster</span>
              <img src={posterImg} alt="Poster Artwork" />
              <div className={styles.hoverOverlay}>
                <Search size={24} />
                <span>{t('view-poster')}</span>
              </div>
            </div>
          </div>

          <div key={`${activeContent._id}-info`} className={styles.info}>
            <span className={styles.category}>{lang === 'ar' && activeContent.taglineAr ? activeContent.taglineAr : activeContent.tagline}</span>
            <h3 className={styles.styleTitle}>{lang === 'ar' && activeContent.nameAr ? activeContent.nameAr : activeContent.name}</h3>
            <p className={styles.textDesc}>{lang === 'ar' && activeContent.descriptionAr ? activeContent.descriptionAr : activeContent.description}</p>
            
            <div className={styles.features}>
              {activeContent.features?.map((feat, i) => (
                <div key={i} className={styles.featureBullet}>
                  <span className={styles.bulletIcon}>•</span>
                  <div>
                    <h4>{lang === 'ar' && feat.titleAr ? feat.titleAr : feat.title}</h4>
                    <p>{lang === 'ar' && feat.descAr ? feat.descAr : feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.actions}>
              <Button variant="primary" onClick={() => handleDeepLink(activeContent.name)}>{t('choose-style-btn')}</Button>
              <Button variant="outline" onClick={() => setLightboxData({ isOpen: true, src: posterImg })}>{t('view-poster')}</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Lightbox 
        isOpen={lightboxData.isOpen} 
        imageSrc={posterImg} 
        onClose={() => setLightboxData({ isOpen: false })} 
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default SignatureStyles;
