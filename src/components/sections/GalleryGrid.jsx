import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './GalleryGrid.module.css';
import { Star } from 'lucide-react';
import Button from '../ui/Button';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { fetchApi } from '../../lib/api';

const GalleryGrid = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [images, setImages] = useState([]);
  const [filters, setFilters] = useState(['All']);
  const headerRef = useScrollReveal();
  


  useEffect(() => {
    const loadGallery = async () => {
      try {
        const data = await fetchApi('/gallery');
          if (data && data.length > 0) {
            const mapped = data.map(d => ({
              id: d._id,
              category: d.category,
              src: d.imageUrl
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
    <section className="section" id="gallery">
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal-fade-up`}>
          <h2 className={styles.title}>Our Work Gallery</h2>
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
          {filteredImages.slice(0, 6).map(img => (
            <div key={img.id} className={styles.gridItem}>
              <img src={img.src} alt={`${img.category} braid style`} className={styles.image} />
            </div>
          ))}
        </div>

        <div className={styles.viewMore}>
          <Link href="/gallery" passHref>
            <Button variant="outline">View Full Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
