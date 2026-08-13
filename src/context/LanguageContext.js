"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchApi } from '../lib/api';

// Translation Dictionary (from provided requirements)
const translations = {
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-styles": "Styles",
    "nav-about": "About Brand",
    "nav-booking": "Book Session",
    "nav-gallery": "Gallery",
    "nav-reviews": "Reviews",
    "nav-contact": "Contact",
    "nav-cta": "Book Now",
    
    // Hero
    "hero-badge": "Self Love Starts Here",
    "hero-accent": "Beauty",
    "hero-main": "in every braid",
    "hero-desc": "Indulge in a premium hair braiding experience tailored just for you. From sleek knotless braids to timeless cornrows, we weave elegance and confidence into every strand.",
    "hero-btn-book": "Book Appointment",
    "hero-btn-styles": "Explore Styles",
    "stat-neat": "Clean & Neat",
    "stat-weeks": "Weeks Wear",
    "stat-tension": "Scalp Tension",

    // Styles Showcase
    "styles-sub": "Handcrafted Elegance",
    "styles-title": "Our Braiding Masterpieces",
    "styles-desc": "Discover our signature braiding techniques designed to protect your hair while keeping you looking absolutely gorgeous.",
    "choose-style-btn": "Choose This Style",
    "view-poster": "View Poster",

    // Signature Styles — Tabs
    "style-knotless-tab": "Knotless Braids",
    "style-cornrows-tab": "Cornrows Braids",
    "style-french-tab": "French Braids",
    "style-boho-tab": "Boho Braids",

    // Knotless Braids
    "style-knotless-cat": "Protective Style",
    "style-knotless-title": "Knotless Braids",
    "style-knotless-tagline": "Gentle on your edges, stunning on your crown.",
    "style-knotless-desc": "A modern take on box braids with a seamless start — no knot at the root means less tension, more comfort, and a natural-looking finish.",
    "feat-lightweight-title": "Lightweight Feel",
    "feat-knotless-light-desc": "No heavy knot at the base keeps the style light and tension-free from day one.",
    "feat-longlasting-title": "Long-Lasting Wear",
    "feat-knotless-long-desc": "With proper care, knotless braids can last up to 8 weeks beautifully.",
    "feat-protective-title": "Protective & Healthy",
    "feat-knotless-prot-desc": "Protects your natural hair and promotes growth while looking gorgeous.",

    // Cornrows
    "style-cornrows-cat": "Classic Style",
    "style-cornrows-title": "Cornrows",
    "style-cornrows-tagline": "A timeless classic, reimagined with precision.",
    "style-cornrows-desc": "Cornrows are braided close to the scalp in continuous rows. Versatile, neat, and ready for any occasion — from everyday wear to special events.",
    "feat-cornrows-light-desc": "Flat against the scalp for a sleek, neat profile that's easy to maintain.",
    "feat-protective-title": "Protective Style",
    "feat-cornrows-prot-desc": "Keeps your natural hair tucked away and protected from daily wear.",
    "feat-cornrows-long-desc": "Stay fresh and neat for weeks with minimal maintenance required.",

    // French Braids
    "style-french-cat": "Elegant Style",
    "style-french-title": "French Braids",
    "style-french-tagline": "Effortless elegance for every moment.",
    "style-french-desc": "French braids weave your hair into a flowing, three-strand pattern that's both elegant and practical. Perfect for a polished look that lasts all day.",
    "feat-clean-title": "Clean & Polished",
    "feat-french-clean-desc": "Creates a refined, structured look that elevates any outfit.",
    "feat-comfortable-title": "Comfortable Fit",
    "feat-french-comfort-desc": "Smooth technique ensures no pulling or discomfort throughout the day.",
    "feat-french-long-desc": "Styled to hold beautifully from morning to evening without fuss.",

    // Boho Braids
    "style-boho-tab": "Boho Braids",
    "style-boho-cat": "Bohemian Style",
    "style-boho-title": "Boho Braids",
    "style-boho-tagline": "Free-spirited, flowy, and uniquely you.",
    "style-boho-desc": "Boho braids blend traditional braiding with loose, flowing curls for a carefree and romantic look. Perfect for those who want to stand out beautifully.",
    "feat-boho-light-desc": "Light, loose ends give the style a natural, effortless feel.",
    "feat-boho-long-desc": "Boho braids maintain their beautiful shape for weeks with minimal upkeep.",
    "feat-boho-prot-desc": "Protective base with free-flowing ends to keep your natural hair healthy.",

    // Footer & Others
    "about-sub": "Our Philosophy",
    "about-title": "The Sweeti Braids Identity",
    "about-desc-1": "\"Sweeti Braids\" is more than just hair styling; it's a celebration of self-love and intricate artistry. We believe that a perfect braid is a form of crown, styled with passion, care, and total precision.",
    
    // Booking Form
    "booking-sub": "Reserve Your Glow",
    "booking-title": "Book Your Appointment",
    "booking-desc": "Customize your braid session in three easy steps, preview your selections, and submit directly to confirm via WhatsApp.",
    "step-1-label": "Style",
    "step-2-label": "Customs",
    "step-3-label": "Details",
    "next-btn": "Next Step",
    "prev-btn": "Back",
    "confirm-btn": "Confirm via WhatsApp",
    
    "err-name": "Name is required",
    "err-phone": "Please enter a valid Egyptian phone number (11 digits)",
    "err-date": "Please select a valid future date",
    "err-time": "Please select a preferred time slot",
    
    // Footer & Others
    "reviews-title": "Loved by our Clients",
    "reviews-desc": "We value your opinion and check every feedback to offer the absolute best experience in Zagazig.",
    "contact-title": "Get in Touch",
    "footer-visit": "Visit Us",
    "footer-location": "Location",
    "footer-address": "Zagazig, Sharqia Governorate, Egypt",
    "footer-call": "Call / WhatsApp",
    "footer-hours": "Working Hours",
    "footer-time": "Daily: 11:00 AM - 09:00 PM",
    "footer-studio": "Sweeti Braids Studio",
    "footer-city": "Zagazig, Egypt",
    "footer-open-maps": "Open Google Maps",
    "footer-slogan": "Hand drawn with love. Beauty in every braid.",
    "foot-credit": "Designed in Zagazig, Egypt.",
    "footer-rights": "Sweeti Braids. All Rights Reserved.",

    // Booking Options & Addons
    "booking-hair-length": "Hair Length",
    "booking-length-medium": "Medium Length",
    "booking-length-long": "Long Length",
    "booking-length-short": "Short Length",
    "booking-addons-label": "Add-ons",
    "booking-addon-curly": "Curly Ends",
    "booking-addon-gold": "Gold Rings/Beads",
    "booking-addon-extra": "Extra Extensions",
    "booking-name": "Name",
    "booking-phone-label": "WhatsApp Number",
    "booking-date-label": "Date",
    "booking-time-label": "Time",
    "booking-select-time": "Select Time",
    "booking-summary": "Booking Summary",
    "booking-sum-style": "Style:",
    "booking-sum-length": "Length:",
    "booking-sum-addons": "Add-ons:",
    "booking-sum-name": "Name:",
    "booking-sum-schedule": "Schedule:",
    "booking-none": "None",
    
    // Gallery & Before/After
    "gallery-subtitle": "Explore our full portfolio of handcrafted braids",
    "gallery-view": "View",
    "before-label": "Before",
    "after-label": "After"
  },
  ar: {
    // Navigation
    "nav-home": "الرئيسية",
    "nav-styles": "التسريحات",
    "nav-about": "عن البراند",
    "nav-booking": "احجز جلسة",
    "nav-gallery": "معرض الصور",
    "nav-reviews": "الآراء",
    "nav-contact": "اتصل بنا",
    "nav-cta": "احجز الآن",

    // Hero
    "hero-badge": "حب الذات يبدأ من هنا",
    "hero-accent": "الجمال",
    "hero-main": "في كل خصلة شعر",
    "hero-desc": "دعي شعرك يتألق بتجربة ضفائر فاخرة مصممة خصيصاً لكِ. من الضفائر الخالية من العقد (knotless) الأنيقة إلى الكورنرو (cornrows) الكلاسيكية، ننسج الأناقة والثقة في كل خصلة.",
    "hero-btn-book": "احجزِ موعدكِ الآن",
    "hero-btn-styles": "استكشفي التسريحات",
    "stat-neat": "نظيف ومتقن 100%",
    "stat-weeks": "يدوم لأكثر من 4 أسابيع",
    "stat-tension": "بدون شد أو ألم لفروة الرأس",

    // Styles Showcase
    "styles-sub": "أناقة صنعت بحب",
    "styles-title": "روائع الضفائر لدينا",
    "styles-desc": "اكتشفي تقنيات الضفائر المميزة لدينا والمصممة لحماية شعرك الطبيعي ومساعدته على النمو مع الحفاظ على مظهركِ الفاتن.",
    "choose-style-btn": "اختيار هذه التسريحة",
    "view-poster": "عرض البوستر",

    // Signature Styles — Tabs
    "style-knotless-tab": "Knotless",
    "style-cornrows-tab": "Cornrows",
    "style-french-tab": "French Braids",
    "style-boho-tab": "Boho",
    // Knotless Braids
    "style-knotless-cat": "تسريحة واقية",
    "style-knotless-title": "ضفائر Knotless",
    "style-knotless-tagline": "لطيفة على حوافّك، رائعة على تاجك.",
    "style-knotless-desc": "نسخة عصرية من الضفائر المربعة بدون عقدة في الأصل — مما يعني ضغطاً أقل، وراحة أكبر، ومظهراً طبيعياً لا مثيل له.",
    "feat-lightweight-title": "خفيفة الوزن",
    "feat-knotless-light-desc": "غياب العقدة الثقيلة في القاعدة يجعل التسريحة خفيفة ومريحة منذ اليوم الأول.",
    "feat-longlasting-title": "تدوم طويلاً",
    "feat-knotless-long-desc": "مع العناية الصحيحة، يمكن أن تدوم ضفائر knotless حتى 8 أسابيع بشكل رائع.",
    "feat-protective-title": "واقية وصحية",
    "feat-knotless-prot-desc": "تحمي شعرك الطبيعي وتعزز نموه مع الحفاظ على مظهر مبهر.",

    // Cornrows
    "style-cornrows-cat": "تسريحة كلاسيكية",
    "style-cornrows-title": "كورنرو",
    "style-cornrows-tagline": "كلاسيكية خالدة، معاد تصميمها بدقة متناهية.",
    "style-cornrows-desc": "الكورنرو هي ضفائر مجدولة بالقرب من فروة الرأس في صفوف متتالية. متعددة الاستخدامات، أنيقة، ومناسبة لأي مناسبة.",
    "feat-cornrows-light-desc": "مسطحة على فروة الرأس لمظهر أنيق وسهل الصيانة.",
    "feat-cornrows-prot-desc": "تحافظ على شعرك الطبيعي محمياً بعيداً عن أضرار التصفيف اليومي.",
    "feat-cornrows-long-desc": "ابقي منتعشة وأنيقة لأسابيع مع أقل قدر من الصيانة.",

    // French Braids
    "style-french-cat": "تسريحة أنيقة",
    "style-french-title": "ضفائر فرنسية",
    "style-french-tagline": "أناقة سهلة لكل لحظة.",
    "style-french-desc": "تنسج الضفائر الفرنسية شعرك في نمط متدفق ثلاثي الخيوط يجمع بين الأناقة والعملية. مثالية للمظهر المصقول طوال اليوم.",
    "feat-clean-title": "نظيفة ومصقولة",
    "feat-french-clean-desc": "تخلق مظهراً راقياً ومنظماً يرفع من مستوى أي إطلالة.",
    "feat-comfortable-title": "مريحة في الارتداء",
    "feat-french-comfort-desc": "تقنية سلسة تضمن عدم الشعور بأي شد أو انزعاج طوال اليوم.",
    "feat-french-long-desc": "مصممة لتبقى رائعة من الصباح حتى المساء.",

    // Boho Braids
    "style-boho-tab": "بوهو برايدز",
    "style-boho-cat": "تسريحة بوهيمية",
    "style-boho-title": "بوهو برايدز",
    "style-boho-tagline": "حرة الروح، متدفقة، وفريدة من نوعها.",
    "style-boho-desc": "تمزج ضفائر البوهو بين الضفر التقليدي والخصلات الحرة المتدفقة لمظهر رومانسي ومميز. مثالية لمن تريد أن تتألق بأسلوب مختلف.",
    "feat-boho-light-desc": "الأطراف الحرة والخفيفة تمنح التسريحة إحساساً طبيعياً وسهلاً.",
    "feat-boho-long-desc": "تحافظ ضفائر البوهو على شكلها الجميل لأسابيع مع أدنى عناية.",
    "feat-boho-prot-desc": "قاعدة واقية مع أطراف حرة للحفاظ على صحة شعرك الطبيعي.",

    // Footer & Others
    "about-sub": "فلسفتنا الخاصة",
    "about-title": "هوية Sweeti Braids المميزة",
    "about-desc-1": "إن \"Sweeti Braids\" ليست مجرد صالون لتصفيف الشعر، بل هي احتفاء حقيقي بحب الذات والفن الدقيق. نؤمن بأن الضفيرة المثالية هي بمثابة تاج للمرأة، نصنعها بشغف، وعناية فائقة، ودقة متناهية.",
    
    // Booking Form
    "booking-sub": "احجزي إشراقتكِ الخاصة",
    "booking-title": "احجزي موعدكِ الآن",
    "booking-desc": "صممي مواصفات ضفائركِ المفضلة في 3 خطوات بسيطة، وتابعي ملخص الحجز مباشرة، ثم أرسلي لتأكيد الحجز الفوري عبر الواتساب.",
    "step-1-label": "التسريحة",
    "step-2-label": "الإضافات",
    "step-3-label": "البيانات",
    "next-btn": "الخطوة التالية",
    "prev-btn": "السابق",
    "confirm-btn": "تأكيد الحجز عبر الواتساب",
    
    "err-name": "الاسم حقل مطلوب",
    "err-phone": "يرجى إدخال رقم هاتف مصري صحيح (11 رقم)",
    "err-date": "يرجى اختيار تاريخ حجز صالح ومستقبلي",
    "err-time": "يرجى اختيار توقيت حجز محدد",
    
    // Footer & Others
    "reviews-title": "آراء عميلاتنا اللواتي أحببن خدماتنا",
    "reviews-desc": "نهتم برأيكِ بشدة، ونتابع كل تقييم لنقدم دائماً أفضل تجربة ضفائر فريدة في مدينة الزقازيق.",
    "contact-title": "معلومات التواصل",
    "footer-visit": "قم بزيارتنا",
    "footer-location": "العنوان",
    "footer-address": "الزقازيق، محافظة الشرقية، مصر",
    "footer-call": "اتصل / واتساب",
    "footer-hours": "ساعات العمل",
    "footer-time": "يومياً: 11:00 صباحاً - 09:00 مساءً",
    "footer-studio": "ستوديو سويتي للضفائر",
    "footer-city": "الزقازيق، مصر",
    "footer-open-maps": "افتح خرائط جوجل",
    "footer-slogan": "صنعت يدوياً بكل الحب. الجمال في كل خصلة شعر.",
    "foot-credit": "صمم بكل حب في الزقازيق، مصر.",
    "footer-rights": "Sweeti Braids. جميع الحقوق محفوظة.",

    // Booking Options & Addons
    "booking-hair-length": "طول الشعر",
    "booking-length-medium": "طول متوسط",
    "booking-length-long": "طويل",
    "booking-length-short": "قصير",
    "booking-addons-label": "الإضافات",
    "booking-addon-curly": "أطراف كيرلي",
    "booking-addon-gold": "حلقات ذهبية/خرز",
    "booking-addon-extra": "إكستنشن إضافي",
    "booking-name": "الاسم",
    "booking-phone-label": "رقم الواتساب",
    "booking-date-label": "التاريخ",
    "booking-time-label": "الوقت",
    "booking-select-time": "اختر الوقت",
    "booking-summary": "ملخص الحجز",
    "booking-sum-style": "التسريحة:",
    "booking-sum-length": "الطول:",
    "booking-sum-addons": "الإضافات:",
    "booking-sum-name": "الاسم:",
    "booking-sum-schedule": "الموعد:",
    "booking-none": "لا يوجد",
    
    // Gallery & Before/After
    "gallery-subtitle": "اكتشفي تشكيلتنا الكاملة من الضفائر المصنوعة يدوياً",
    "gallery-view": "عرض",
    "before-label": "قبل",
    "after-label": "بعد"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [dynamicTranslations, setDynamicTranslations] = useState(translations);

  useEffect(() => {
    const savedLang = localStorage.getItem('sweeti_lang');
    if (savedLang) {
      setLang(savedLang);
    }
    
    // Fetch dynamic content from API
    const fetchContent = async () => {
      try {
        const data = await fetchApi('/content');
        const content = data;
        
        if (content) {
          setDynamicTranslations(prev => {
            const newEn = { ...prev.en };
            const newAr = { ...prev.ar };
            
            // Map Hero
            if (content.heroData) {
              if (content.heroData.badge) { newEn["hero-badge"] = content.heroData.badge; newAr["hero-badge"] = content.heroData.badge; }
              if (content.heroData.accent) { newEn["hero-accent"] = content.heroData.accent; newAr["hero-accent"] = content.heroData.accent; }
              if (content.heroData.main) { newEn["hero-main"] = content.heroData.main; newAr["hero-main"] = content.heroData.main; }
              if (content.heroData.desc) { newEn["hero-desc"] = content.heroData.desc; newAr["hero-desc"] = content.heroData.desc; }
              if (content.heroData.statNeat) { newEn["stat-neat"] = content.heroData.statNeat; newAr["stat-neat"] = content.heroData.statNeat; }
              if (content.heroData.statNeatValue) { newEn["stat-neat-val"] = content.heroData.statNeatValue; newAr["stat-neat-val"] = content.heroData.statNeatValue; }
              if (content.heroData.statWeeks) { newEn["stat-weeks"] = content.heroData.statWeeks; newAr["stat-weeks"] = content.heroData.statWeeks; }
              if (content.heroData.statWeeksValue) { newEn["stat-weeks-val"] = content.heroData.statWeeksValue; newAr["stat-weeks-val"] = content.heroData.statWeeksValue; }
              if (content.heroData.statTension) { newEn["stat-tension"] = content.heroData.statTension; newAr["stat-tension"] = content.heroData.statTension; }
              if (content.heroData.statTensionValue) { newEn["stat-tension-val"] = content.heroData.statTensionValue; newAr["stat-tension-val"] = content.heroData.statTensionValue; }
              if (content.heroData.sliderImages) { newEn["hero-sliderImages"] = content.heroData.sliderImages; newAr["hero-sliderImages"] = content.heroData.sliderImages; }
            }
            
            // Map Signature
            if (content.signatureData) {
              if (content.signatureData.sub) { newEn["styles-sub"] = content.signatureData.sub; newAr["styles-sub"] = content.signatureData.sub; }
              if (content.signatureData.title) { newEn["styles-title"] = content.signatureData.title; newAr["styles-title"] = content.signatureData.title; }
              if (content.signatureData.desc) { newEn["styles-desc"] = content.signatureData.desc; newAr["styles-desc"] = content.signatureData.desc; }
            }
            
            // Map About
            if (content.aboutData) {
              if (content.aboutData.sub) { newEn["about-sub"] = content.aboutData.sub; newAr["about-sub"] = content.aboutData.sub; }
              if (content.aboutData.title) { newEn["about-title"] = content.aboutData.title; newAr["about-title"] = content.aboutData.title; }
              if (content.aboutData.desc) { newEn["about-desc-1"] = content.aboutData.desc; newAr["about-desc-1"] = content.aboutData.desc; }
            }
            
            // Map Booking
            if (content.bookingData) {
              if (content.bookingData.sub) { newEn["booking-sub"] = content.bookingData.sub; newAr["booking-sub"] = content.bookingData.sub; }
              if (content.bookingData.title) { newEn["booking-title"] = content.bookingData.title; newAr["booking-title"] = content.bookingData.title; }
              if (content.bookingData.desc) { newEn["booking-desc"] = content.bookingData.desc; newAr["booking-desc"] = content.bookingData.desc; }
            }
            
            // Map Reviews
            if (content.reviewsData) {
              if (content.reviewsData.title) { newEn["reviews-title"] = content.reviewsData.title; newAr["reviews-title"] = content.reviewsData.title; }
              if (content.reviewsData.desc) { newEn["reviews-desc"] = content.reviewsData.desc; newAr["reviews-desc"] = content.reviewsData.desc; }
            }
            
            // Map Contact
            if (content.contactData) {
              if (content.contactData.title) { newEn["contact-title"] = content.contactData.title; newAr["contact-title"] = content.contactData.title; }
              if (content.contactData.slogan) { newEn["footer-slogan"] = content.contactData.slogan; newAr["footer-slogan"] = content.contactData.slogan; }
              if (content.contactData.credit) { newEn["foot-credit"] = content.contactData.credit; newAr["foot-credit"] = content.contactData.credit; }
              
              const wp = content.contactData.whatsapp;
              const ig = content.contactData.instagram;
              const tt = content.contactData.tiktok;
              
              newEn["contact-whatsapp"] = wp; newAr["contact-whatsapp"] = wp;
              newEn["contact-instagram"] = ig; newAr["contact-instagram"] = ig;
              newEn["contact-tiktok"] = tt; newAr["contact-tiktok"] = tt;
            }

            return { ...prev, en: newEn, ar: newAr };
          });
        }
      } catch (err) {
        console.error("Failed to load dynamic content:", err);
      }
    };
    fetchContent();
    const timer = setInterval(fetchContent, 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Sync document direction and lang attribute whenever lang changes
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.body.classList.add('rtl-dir');
    } else {
      document.body.classList.remove('rtl-dir');
    }
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('sweeti_lang', newLang);
  };

  const t = (key) => {
    return dynamicTranslations[lang][key] || key; // Return translation or key itself if not found
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
