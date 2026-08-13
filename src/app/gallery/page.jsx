"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './GalleryPage.module.css';
import Lightbox from '../../components/ui/Lightbox';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { Moon, Sun } from 'lucide-react';
import { fetchApi } from '../../lib/api';

export default function GalleryPage() {
  const { t, language, toggleLanguage } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [lightboxData, setLightboxData] = useState({ isOpen: false, src: '' });
  const [images, setImages] = useState([]);
  const [filters, setFilters] = useState(['All']);
  
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const defaultImages = [
    { id: 1, category: 'Knotless', src: '/assets/a74819a9-45b7-488a-9394-2ab0d23bcb13.png' },
    { id: 2, category: 'Boho', src: '/assets/2c0723a4-2348-4845-b910-a748b5ca2de6.png' },
    { id: 3, category: 'French', src: '/assets/70957c18-ac65-4442-bebd-609f7c53ad05.png' },
    { id: 4, category: 'Kids', src: '/assets/efc22493-77dc-4820-9aa6-a435f3078ea2.png' },
    { id: 5, category: 'Knotless', src: '/assets/49ac9e9a-6397-4f72-9947-4401acad9214.png' },
    { id: 6, category: 'Kids', src: '/assets/f4f8d25d-a890-4461-843d-ce68c5514d7b.png' },
    { id: 7, category: 'Knotless', src: '/assets/Knotless Poster.png' },
    { id: 8, category: 'Boho', src: '/assets/Boho Poster.png' },
    { id: 9, category: 'French', src: '/assets/French Poster.png' },
    { id: 10, category: 'Cornrows', src: '/assets/Cornrows Poster.png' },
    { id: 11, category: 'Knotless', src: '/assets/761e4913-3233-4faf-abae-33f10a879e76.png' },
    { id: 12, category: 'Boho', src: '/assets/Boho.png' }
  ];

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const data = await fetchApi('/gallery');
        if (data && data.length > 0) {
          const mapped = data.map(d => ({
            id: d._id,
            category: d.category,
            src: d.imageUrl,
            styleName: d.styleName,
            price: d.price
          }));
          setImages(mapped);
          const uniqueCategories = [...new Set(mapped.map(item => item.category))];
          setFilters(['All', ...uniqueCategories]);
        } else {
          setImages([]);
          setFilters(['All']);
        }
      } catch (err) {
        console.error('Failed to load gallery', err);
        setImages([]);
        setFilters(['All']);
      }
    };
    loadGallery();
  }, []);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.topNav}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className={styles.backBtn}>
            <ArrowLeft size={20} />
            <span>{t('nav-home')}</span>
          </Link>
          <div className={styles.actions}>
            <button className={styles.actionBtn} onClick={toggleLanguage}>
              {language === 'en' ? 'ع' : 'EN'}
            </button>
            <button className={styles.actionBtn} onClick={() => dispatch(toggleTheme())}>
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main className={`container ${styles.mainContent}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('nav-gallery')}</h1>
          <p className={styles.subtitle}>Explore our full portfolio of handcrafted braids</p>
          
          <div className={styles.filters}>
            {filters.map(f => (
              <button 
                key={f} 
                className={`${styles.filterPill} ${filter === f ? styles.active : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div key={filter} className={styles.masonryGrid}>
          {filteredImages.map(img => (
            <div key={img.id} className={styles.gridItem} onClick={() => setLightboxData({ isOpen: true, src: img.src })}>
              <img src={img.src} alt={`${img.category} braid style`} className={styles.image} />
              <div className={styles.overlay}>
                {img.styleName ? (
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '18px', fontWeight: 'bold' }}>{img.styleName}</span>
                    {img.price && <span style={{ fontSize: '14px', opacity: 0.9 }}>{img.price}</span>}
                  </div>
                ) : (
                  <span>View</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Lightbox 
        isOpen={lightboxData.isOpen} 
        imageSrc={lightboxData.src} 
        onClose={() => setLightboxData({ isOpen: false, src: '' })} 
      />
    </div>
  );
}
