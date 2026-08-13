"use client";

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import SignatureStyles from '../components/sections/SignatureStyles';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import BeforeAfter from '../components/sections/BeforeAfter';
import GalleryGrid from '../components/sections/GalleryGrid';
import Testimonials from '../components/sections/Testimonials';
import BookingCTA from '../components/sections/BookingCTA';

export default function Home() {
  const theme = useSelector((state) => state.theme.theme);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setSidebarOpen(false);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // When closed: full width (no margin). When open: shift for sidebar.
  const mainStyle = {
    marginLeft: isMobile ? 0 : (sidebarOpen ? '220px' : 0),
    width: isMobile ? '100%' : (sidebarOpen ? 'calc(100% - 220px)' : '100%'),
    transition: 'margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    minHeight: '100vh',
  };

  return (
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <main className="main-content" style={mainStyle}>
        <Hero />
        <SignatureStyles />
        <WhyChooseUs />
        <BeforeAfter />
        <GalleryGrid />
        <Testimonials />
        <BookingCTA />
        <Footer />
      </main>
    </div>
  );
}
