"use client";

import React from 'react';
import styles from './Footer.module.css';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.infoPanel}>
              <span className={styles.subtitle}>{t('footer-visit')}</span>
              <h2 className={styles.title}>{t('contact-title')}</h2>
              
              <div className={styles.detailsList}>
                <div className={styles.contactItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <h4>{t('footer-location')}</h4>
                    <p>{t('footer-address')}</p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <h4>{t('footer-call')}</h4>
                    <a href="tel:01091945495" className={styles.link}>01091945495</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <h4>{t('footer-hours')}</h4>
                    <p>{t('footer-time')}</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.socialIcons}>
                <a href="https://wa.me/201091945495" target="_blank" rel="noreferrer" className={styles.socialCircle}>WA</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialCircle} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialCircle} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
            
            <div className={styles.mapPanel}>
              <div className={styles.mapCardGlow}>
                <MapPin className={styles.mapPin} />
                <h3>{t('footer-studio')}</h3>
                <p>{t('footer-city')}</p>
                <a href="https://maps.google.com/?q=Zagazig,+Egypt" target="_blank" rel="noreferrer" className={styles.mapBtn}>
                  {t('footer-open-maps')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerTop}>
            <div className={styles.logo}>
              <img src="/assets/Logo Icon.png" alt="Sweeti Braids" className={styles.logoImg} />
              <span>Sweeti Braids</span>
            </div>
            <p className={styles.slogan}>{t('footer-slogan')}</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} {t('footer-rights')} <span>{t('foot-credit')}</span></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
