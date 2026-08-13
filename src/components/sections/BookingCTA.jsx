"use client";

import React, { useState, useEffect } from 'react';
import styles from './BookingCTA.module.css';
import Button from '../ui/Button';
import { Star, CheckCircle } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { fetchApi } from '../../lib/api';

const BookingCTA = () => {
  const ctaRef = useScrollReveal();
  const { lang, t } = useLanguage();
  
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    style: 'French Braids',
    length: 'Medium Length',
    addons: [],
    name: '',
    phone: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Set min date to today
    const dateInput = document.getElementById("booking-date");
    if (dateInput) {
      dateInput.min = new Date().toISOString().split("T")[0];
    }
  }, [activeStep]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({ ...prev, addons: [...prev.addons, value] }));
      } else {
        setFormData(prev => ({ ...prev, addons: prev.addons.filter(item => item !== value) }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
      }
    }
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('err-name');
    const egPhoneRegex = /^01[0125][0-9]{8}$/;
    if (!egPhoneRegex.test(formData.phone.trim())) newErrors.phone = t('err-phone');
    if (!formData.date) newErrors.date = t('err-date');
    if (!formData.time) newErrors.time = t('err-time');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (activeStep < 3) setActiveStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    if (activeStep > 1) setActiveStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    try {
      await fetchApi('/bookings', {
        method: 'POST',
        body: JSON.stringify({
          clientName: formData.name,
          clientPhone: formData.phone,
          style: formData.style,
          length: formData.length,
          addons: formData.addons,
          date: formData.date,
          time: formData.time
        }),
      });
    } catch (err) {
      console.error('Failed to push booking to API:', err);
    }

    let messageBody = "";
    if (lang === "ar") {
      messageBody = `========================\n` +
                    `🌸 طلب حجز جديد 🌸\n` +
                    `صالون Sweeti Braids\n` +
                    `========================\n\n` +
                    `👤 العميل: ${formData.name}\n` +
                    `📞 رقم الهاتف: ${formData.phone}\n\n` +
                    `------------------------\n` +
                    `تفاصيل الجلسة:\n` +
                    `------------------------\n` +
                    `👑 نوع التسريحة: ${formData.style}\n` +
                    `📏 الطول والحجم: ${formData.length}\n` +
                    `✨ الإضافات: ${formData.addons.length ? formData.addons.join(', ') : 'لا يوجد'}\n\n` +
                    `------------------------\n` +
                    `الموعد المطلوب:\n` +
                    `------------------------\n` +
                    `📅 التاريخ: ${formData.date}\n` +
                    `⏰ التوقيت: ${formData.time}\n\n` +
                    `========================\n` +
                    `أنتظر تأكيد الحجز، شكراً لكم 💖`;
    } else {
      messageBody = `========================\n` +
                    `🌸 NEW BOOKING REQUEST 🌸\n` +
                    `Sweeti Braids Studio\n` +
                    `========================\n\n` +
                    `👤 Client: ${formData.name}\n` +
                    `📞 Phone: ${formData.phone}\n\n` +
                    `------------------------\n` +
                    `SESSION DETAILS:\n` +
                    `------------------------\n` +
                    `👑 Braid Style: ${formData.style}\n` +
                    `📏 Hair Length: ${formData.length}\n` +
                    `✨ Add-ons: ${formData.addons.length ? formData.addons.join(', ') : 'None'}\n\n` +
                    `------------------------\n` +
                    `REQUESTED SCHEDULE:\n` +
                    `------------------------\n` +
                    `📅 Date: ${formData.date}\n` +
                    `⏰ Time: ${formData.time}\n\n` +
                    `========================\n` +
                    `Looking forward to confirming my appointment! 💖`;
    }

    const waNumber = "201091945495";
    const waUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(messageBody)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section className="section" id="booking">
      <div className="container">
        <div ref={ctaRef} className={`glass-card ${styles.wrapper} reveal-scale`} style={{ flexDirection: 'column', gap: '32px' }}>
          
          <div className={styles.header} style={{textAlign: 'center'}}>
            <h2 className={styles.title}>{t('booking-title')}</h2>
            <p className={styles.text} style={{maxWidth: '600px', margin: '0 auto'}}>{t('booking-desc')}</p>
          </div>

          <div className={styles.bookingGrid}>
            <div className={styles.formCard}>
              {/* Stepper */}
              <div className={styles.stepper}>
                {[1,2,3].map(step => (
                  <div key={step} className={`${styles.step} ${activeStep === step ? styles.activeStep : ''} ${activeStep > step ? styles.completedStep : ''}`}>
                    <div className={styles.stepNum}>{activeStep > step ? <CheckCircle size={14} /> : step}</div>
                    <span>{t(`step-${step}-label`)}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                
                {activeStep === 1 && (
                  <div className={styles.stepContent}>
                    <h3>{t('step-1-label')}</h3>
                    <div className={styles.radioGroup}>
                      {[
                        { name: 'French Braids', img: '/assets/French Braids.png' },
                        { name: 'Cornrows', img: '/assets/Cornrows.png' },
                        { name: 'Knotless', img: '/assets/Knotless.png' },
                        { name: 'Boho', img: '/assets/Boho.png' }
                      ].map(opt => (
                        <label key={opt.name} className={`${styles.radioLabel} ${formData.style === opt.name ? styles.selectedRadio : ''}`}>
                          <input type="radio" name="style" value={opt.name} checked={formData.style === opt.name} onChange={handleInputChange} style={{display: 'none'}} />
                          <img src={opt.img} alt={opt.name} className={styles.radioImage} />
                          <span>{opt.name}</span>
                        </label>
                      ))}
                    </div>
                    <div className={styles.buttons}>
                      <div style={{width: '100%'}}>
                        <Button variant="primary" type="button" onClick={nextStep} style={{width: '100%', display: 'block'}}>{t('next-btn')}</Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className={styles.stepContent}>
                    <h3>{t('step-2-label')}</h3>
                    <div className={styles.inputGroup}>
                      <label htmlFor="hairLength">{t('booking-hair-length')}</label>
                      <select id="hairLength" name="length" value={formData.length} onChange={handleInputChange} className={styles.input}>
                        <option value="Medium Length">{t('booking-length-medium')}</option>
                        <option value="Long Length">{t('booking-length-long')}</option>
                        <option value="Short Length">{t('booking-length-short')}</option>
                      </select>
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label>{t('booking-addons-label')}</label>
                      <div className={styles.checkboxGroup}>
                        {[
                          { id: 'Curly Ends', label: t('booking-addon-curly') },
                          { id: 'Gold Rings/Beads', label: t('booking-addon-gold') },
                          { id: 'Extra Extensions', label: t('booking-addon-extra') }
                        ].map(addon => (
                          <label key={addon.id} className={styles.checkboxLabel}>
                            <input type="checkbox" name="addons" value={addon.id} checked={formData.addons.includes(addon.id)} onChange={handleInputChange} />
                            {addon.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.buttons}>
                      <Button variant="outline" type="button" onClick={prevStep}>{t('prev-btn')}</Button>
                      <Button variant="primary" type="button" onClick={nextStep}>{t('next-btn')}</Button>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className={styles.stepContent}>
                    <h3>{t('step-3-label')}</h3>
                    <div className={styles.inputGroup}>
                      <label htmlFor="clientName">{t('booking-name')}</label>
                      <input id="clientName" type="text" name="name" value={formData.name} onChange={handleInputChange} className={`${styles.input} ${errors.name ? styles.inputError : ''}`} />
                      {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <label htmlFor="clientPhone">{t('booking-phone-label')}</label>
                      <input id="clientPhone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={`${styles.input} ${errors.phone ? styles.inputError : ''}`} placeholder="010XXXXXXXX" />
                      {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>

                    <div style={{display: 'flex', gap: '16px'}}>
                      <div className={styles.inputGroup} style={{flex: 1}}>
                        <label htmlFor="booking-date">{t('booking-date-label')}</label>
                        <input type="date" id="booking-date" name="date" value={formData.date} onChange={handleInputChange} className={`${styles.input} ${errors.date ? styles.inputError : ''}`} />
                        {errors.date && <span className={styles.errorText}>{errors.date}</span>}
                      </div>
                      
                      <div className={styles.inputGroup} style={{flex: 1}}>
                        <label htmlFor="bookingTime">{t('booking-time-label')}</label>
                        <select id="bookingTime" name="time" value={formData.time} onChange={handleInputChange} className={`${styles.input} ${errors.time ? styles.inputError : ''}`}>
                          <option value="">{t('booking-select-time')}</option>
                          <option>10:00 AM</option>
                          <option>01:00 PM</option>
                          <option>04:00 PM</option>
                          <option>07:00 PM</option>
                        </select>
                        {errors.time && <span className={styles.errorText}>{errors.time}</span>}
                      </div>
                    </div>
                    
                    <div className={styles.buttons}>
                      <Button variant="outline" type="button" onClick={prevStep}>{t('prev-btn')}</Button>
                      <Button variant="primary" type="submit">{t('confirm-btn')}</Button>
                    </div>
                  </div>
                )}
                
              </form>
            </div>

            <div className={styles.summaryCard}>
              <h3 style={{marginBottom: '8px', fontSize: '20px'}}>{t('booking-summary')}</h3>
              <div className={styles.summaryContent}>
                <div className={styles.summaryItem}><span>{t('booking-sum-style')}</span> <span>{formData.style === 'Knotless' ? t('style-knotless-tab') : formData.style === 'Cornrows' ? t('style-cornrows-tab') : formData.style === 'French Braids' ? t('style-french-tab') : t('style-boho-tab')}</span></div>
                <div className={styles.summaryItem}><span>{t('booking-sum-length')}</span> <span>{formData.length === 'Medium Length' ? t('booking-length-medium') : formData.length === 'Long Length' ? t('booking-length-long') : t('booking-length-short')}</span></div>
                <div className={styles.summaryItem}><span>{t('booking-sum-addons')}</span> <span>{formData.addons.length ? formData.addons.map(a => a === 'Curly Ends' ? t('booking-addon-curly') : a === 'Gold Rings/Beads' ? t('booking-addon-gold') : t('booking-addon-extra')).join(', ') : t('booking-none')}</span></div>
                <div className={styles.summaryItem}><span>{t('booking-sum-name')}</span> <span>{formData.name || '-'}</span></div>
                <div className={styles.summaryItem}><span>{t('booking-sum-schedule')}</span> <span>{formData.date ? `${formData.date} @ ${formData.time || ''}` : '-'}</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
