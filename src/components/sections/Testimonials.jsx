"use client";

import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';
import { fetchApi } from '../../lib/api';

const Testimonials = () => {
  const headerRef = useScrollReveal();
  const { t } = useLanguage();

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', location: '', text: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchApi('/reviews');
        if (data && data.length > 0) {
          setReviews(data);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error('Failed to load reviews', err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };
    loadReviews();
    const timer = setInterval(loadReviews, 15000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.location || !newReview.text) return;
    
    // Normalize location string
    let loc = newReview.location.trim();
    loc = loc.replace(/,?\s*egypt\s*$/i, '').trim();
    loc = `${loc}, Egypt`;
    
    const reviewPayload = {
      text: newReview.text,
      name: newReview.name,
      location: loc,
    };
    
    try {
      const created = await fetchApi('/reviews', {
        method: 'POST',
        body: JSON.stringify(reviewPayload),
      });
      setReviews([created, ...reviews]);
    } catch (err) {
      console.error('Failed to submit review', err);
    }
    
    setNewReview({ name: '', location: '', text: '' });
    setIsModalOpen(false);
  };

  if (loading) {
    return <section className="section" id="reviews"><div className="container" style={{textAlign: 'center', padding: '50px 0'}}>Loading reviews...</div></section>;
  }

  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t('reviews-title') || 'Our Reviews'}</h2>
          <p className={styles.desc} style={{maxWidth: '600px', margin: '0 auto 32px', opacity: 0.8}}>{t('reviews-desc') || 'See what our beautiful clients have to say about their experience.'}</p>
        </div>

        <div className={styles.scrollContainer}>
          {reviews.length > 0 && reviews.map((review) => (
            <div key={review._id} className={`glass-card ${styles.card}`}>
              <p className={styles.text}>"{review.text}"</p>
              <div className={styles.user}>
                <div className={styles.avatar} style={{backgroundImage: `url(/assets/Logo.jpg)`}}></div>
                <div>
                  <span className={styles.name} style={{display: 'block'}}>{review.name}</span>
                  <span style={{fontSize: '12px', opacity: 0.7}}>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.addReviewBtnContainer}>
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>Add Your Review</Button>
        </div>

        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <div className={`glass-card ${styles.modalContent}`} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>&times;</button>
              <h3 className={styles.addReviewTitle}>Leave a Review</h3>
              <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="reviewerName">Your Name</label>
              <input 
                type="text" 
                id="reviewerName"
                className={styles.input}
                placeholder="e.g. Mai E."
                value={newReview.name}
                onChange={e => setNewReview({...newReview, name: e.target.value})}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="reviewerLocation">City / Location</label>
              <input 
                type="text" 
                id="reviewerLocation"
                className={styles.input}
                placeholder="e.g. Cairo"
                value={newReview.location}
                onChange={e => setNewReview({...newReview, location: e.target.value})}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="reviewerText">Your Review</label>
              <textarea 
                id="reviewerText"
                className={styles.textarea}
                placeholder="Tell us about your experience..."
                value={newReview.text}
                onChange={e => setNewReview({...newReview, text: e.target.value})}
                required
              ></textarea>
            </div>
            <div className={styles.submitWrapper}>
              <Button type="submit" variant="primary">Send Review</Button>
            </div>
          </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
