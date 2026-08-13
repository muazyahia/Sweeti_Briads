"use client";

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';
import Button from '../ui/Button';
import { HaloGlow, CurvedNeonLine } from '../ui/Decorative';
import { ArrowRight, Star } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
const Hero = () => {
  const textRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const { t } = useLanguage();
  
  const fetchedImages = t('hero-sliderImages');
  const validFetchedImages = Array.isArray(fetchedImages) ? fetchedImages.filter(img => img && typeof img === 'string' && img.trim() !== '') : [];
  const heroImages = validFetchedImages;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const cycleImage = useCallback(() => {
    if (heroImages.length <= 1) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
      setAnimating(false);
    }, 600);
  }, [heroImages.length]);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(cycleImage, 5000);
    return () => clearInterval(interval);
  }, [cycleImage, heroImages.length]);

  const scrollToSection = (id) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div ref={textRef} className={`${styles.textContent} reveal-fade-left`}>
          
          <h1 className={styles.title}>
            <span className="script-accent" style={{display: 'block', marginBottom: '8px'}}>{t('hero-accent')}</span>
            {t('hero-main')}
          </h1>
          
          <p className={styles.description}>
            {t('hero-desc')}
          </p>
          
          <div className={styles.actions}>
            <Button variant="primary" icon={<ArrowRight size={16} />} onClick={() => scrollToSection('booking')}>{t('hero-btn-book')}</Button>
            <Button variant="outline" onClick={() => scrollToSection('services')}>{t('hero-btn-styles')}</Button>
          </div>
        </div>

        <div ref={imageRef} className={`${styles.imageContent} reveal-fade-right`}>
          <HaloGlow className={styles.heroHalo} />
          
          <div className={styles.imageCarousel}>
            {heroImages.map((src, i) => (
              <img
                key={`${i}-${src}`}
                src={src}
                alt={`Sweeti Braids showcase ${i + 1}`}
                className={`${styles.heroImg} ${
                  i === activeIndex
                    ? animating
                      ? styles.imgExit
                      : styles.imgActive
                    : styles.imgHidden
                }`}
              />
            ))}

            {/* Dots indicator */}
            <div className={styles.dotsRow}>
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => {
                    if (i !== activeIndex) {
                      setAnimating(true);
                      setTimeout(() => {
                        setActiveIndex(i);
                        setAnimating(false);
                      }, 600);
                    }
                  }}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CurvedNeonLine />
    </section>
  );
};

export default Hero;
