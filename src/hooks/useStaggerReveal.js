"use client";

import { useEffect, useRef } from 'react';

/**
 * Hook that observes a container and continuously reveals/hides
 * children with staggered delay when entering/leaving viewport.
 * 
 * @param {string} childSelector - CSS selector for child items to stagger
 * @param {number} staggerDelay - Delay in ms between each child reveal
 */
const useStaggerReveal = (childSelector = '.stagger-item', staggerDelay = 100) => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const children = container.querySelectorAll(childSelector);
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * staggerDelay);
            });
          } else {
            children.forEach((child) => {
              child.classList.remove('revealed');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [childSelector, staggerDelay]);

  return ref;
};

export default useStaggerReveal;
