"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';
import { Moon, Sun } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const { lang, toggleLanguage, t } = useLanguage();
  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { key: 'nav-home', id: 'home' },
    { key: 'nav-styles', id: 'services' },
    { key: 'nav-about', id: 'about' },
    { key: 'nav-booking', id: 'booking' },
    { key: 'nav-reviews', id: 'reviews' },
    { key: 'nav-contact', id: 'contact' }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navbarHeight = 80;
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveLink(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = ['home', 'services', 'about', 'booking', 'reviews', 'contact'];
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <img src="/assets/Logo Icon.png" alt="Sweeti Braids" className={styles.logoImg} />
          <div className={styles.logoText}>
            <span className={styles.sweeti}>Sweeti</span>
            <span className={styles.braids}>BRAIDS</span>
          </div>
        </div>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.id} className={styles.navItem}>
              <a 
                href={`#${link.id}`} 
                className={`${styles.navLink} ${activeLink === link.id ? styles.activeLink : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button 
            className={styles.themeToggle} 
            onClick={toggleLanguage}
            aria-label="Toggle Language"
            style={{ fontSize: '14px', fontWeight: 'bold' }}
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          
          <button 
            className={styles.themeToggle} 
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <Button variant="primary" onClick={(e) => handleNavClick(e, 'booking')}>{t('nav-cta')}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
