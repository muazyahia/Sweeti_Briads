"use client";

import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds continuous scroll-reveal animations to elements.
 * Elements animate IN when entering the viewport and animate OUT when leaving.
 * 
 * @param {Object} options
 * @param {number} options.threshold - How much of the element must be visible (0-1)
 * @param {string} options.rootMargin - Margin around the root
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -60px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;
