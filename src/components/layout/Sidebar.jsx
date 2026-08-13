"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { useLanguage } from '../../context/LanguageContext';
import { Moon, Sun, ArrowRight, ChevronLeft, ChevronRight, Home, Scissors, Heart, CalendarDays, Star, PhoneCall, Image, Menu } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const { lang, toggleLanguage, t } = useLanguage();

  const [activeLink, setActiveLink] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  const navLinks = [
    { key: 'nav-home', id: 'home', icon: <Home size={20} /> },
    { key: 'nav-styles', id: 'services', icon: <Scissors size={20} /> },
    { key: 'nav-about', id: 'about', icon: <Heart size={20} /> },
    { key: 'nav-gallery', id: 'gallery', icon: <Image size={20} /> },
    { key: 'nav-reviews', id: 'reviews', icon: <Star size={20} /> },
    { key: 'nav-booking', id: 'booking', icon: <CalendarDays size={20} /> },
    { key: 'nav-contact', id: 'contact', icon: <PhoneCall size={20} /> }
  ];

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    setIsScrolling(true);
    setActiveLink(targetId);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 900);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      const sectionIds = ['home', 'services', 'about', 'gallery', 'reviews', 'booking', 'contact'];
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = id;
        }
      }
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`${styles.toggleBtn} ${isOpen ? styles.toggleBtnOpen : styles.toggleBtnClosed}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        <span className={styles.desktopIcon}>
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </span>
        <span className={styles.mobileIcon}>
          {isOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
        </span>
      </button>

      {/* Mobile overlay */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <img src="/assets/Logo Icon.png" alt="Sweeti Braids" className={styles.logoImg} />
          {isOpen && (
            <div className={styles.logoText}>
              <span className={styles.sweeti}>Sweeti</span>
              <span className={styles.braids}>BRAIDS</span>
            </div>
          )}
        </div>

        {/* Nav Links */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    title={!isOpen ? t(link.key) : undefined}
                  >
                    {/* Icon: only when CLOSED */}
                    {!isOpen && <span className={styles.navIcon}>{link.icon}</span>}
                    {/* Label: only when OPEN */}
                    {isOpen && <span className={styles.navLabel}>{t(link.key)}</span>}
                    {isActive && <span className={styles.activeIndicator} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className={styles.bottomActions}>
          <button className={styles.actionBtn} onClick={toggleLanguage} aria-label="Toggle Language" title={lang === 'en' ? 'العربية' : 'English'}>
            {!isOpen && <span className={styles.navIcon}>{lang === 'en' ? 'ع' : 'EN'}</span>}
            {isOpen && <span className={styles.navLabel}>{lang === 'en' ? 'العربية' : 'English'}</span>}
          </button>

          <button className={styles.actionBtn} onClick={() => dispatch(toggleTheme())} aria-label="Toggle Theme" title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
            {!isOpen && <span className={styles.navIcon}>{theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}</span>}
            {isOpen && <span className={styles.navLabel}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>}
          </button>

          <a href="#booking" className={styles.bookBtn} onClick={(e) => handleNavClick(e, 'booking')}>
            {isOpen ? <span>{t('nav-cta')}</span> : <ArrowRight size={20} />}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
