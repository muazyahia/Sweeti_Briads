import React, { useRef, useState, useEffect } from 'react';
import styles from './BeforeAfter.module.css';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { fetchApi } from '../../lib/api';
import { useLanguage } from '../../context/LanguageContext';

const BeforeAfter = () => {
  const scrollRef = useRef(null);
  const sectionRef = useScrollReveal();
  const { t } = useLanguage();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const fetchTransformations = async () => {
      try {
        const data = await fetchApi('/transformations');
        if (data && data.length > 0) {
          setPairs(data.map(t => ({
            id: t._id,
            before: t.beforeImageUrl,
            after: t.afterImageUrl,
            beforeLabel: t.beforeLabel || 'Before',
            afterLabel: t.afterLabel || 'After'
          })));
        } else {
          setPairs([]);
        }
      } catch (err) {
        console.error('Failed to fetch transformations', err);
        setPairs([]);
      }
    };
    fetchTransformations();
    const timer = setInterval(fetchTransformations, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div ref={sectionRef} className={`glass-card ${styles.wrapper} reveal-scale`}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              {t('before-after-title')}
            </div>
            <div className={styles.navButtons}>
              <button className={styles.navBtn} onClick={() => scroll('left')} aria-label="Scroll left"><ArrowLeft size={16} /></button>
              <button className={styles.navBtn} onClick={() => scroll('right')} aria-label="Scroll right"><ArrowRight size={16} /></button>
            </div>
          </div>

          <div className={styles.scrollContainer} ref={scrollRef}>
            {pairs.map((pair) => (
              <div key={pair.id} className={styles.pair}>
                <div className={styles.imageContainer}>
                  <img src={pair.before} alt="Before" className={styles.image} />
                  <span className={styles.label}>{t('before-label')}</span>
                </div>
                <div className={styles.iconContainer}>
                  <div className={styles.sliderIcon}><ArrowRight size={14} /></div>
                </div>
                <div className={styles.imageContainer}>
                  <img src={pair.after} alt="After" className={styles.image} />
                  <span className={styles.label}>{t('after-label')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
