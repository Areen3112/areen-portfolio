'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SceneBackdrop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    const parallax = parallaxRef.current;
    if (!inner || !parallax) return;

    // Check motion preference
    const isMotionOff = () =>
      document.documentElement.getAttribute('data-motion') === 'off' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMotionOff()) {
      gsap.set([inner, parallax], { opacity: 1, y: 0, x: 0, scale: 1, filter: 'none' });
      return;
    }

    // GSAP context for clean garbage collection
    const ctx = gsap.context(() => {
      // 1. Initial entrance animation on page load
      gsap.fromTo(
        inner,
        {
          opacity: 0,
          scale: 0.95,
          y: 35,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.3,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(inner, { clearProps: 'filter' });
          },
        }
      );

      // 2. Scroll-linked parallax movement tied to hero section
      // NOTE: Opacity remains fully visible (1) throughout the scroll.
      // The portrait does NOT vanish; it gently parallaxes upward as the hero scrolls,
      // and is naturally eclipsed as the incoming solid sections (.solid-section) scroll over it.
      const heroEl = document.querySelector<HTMLElement>('#top') || document.querySelector<HTMLElement>('.hero');
      if (heroEl) {
        gsap.to(inner, {
          y: -50,
          scale: 0.98,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });
      }

      // 3. Subtle pointer parallax on desktop (applied to separate parallax wrapper)
      const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (isFinePointer) {
        const xTo = gsap.quickTo(parallax, 'x', { duration: 0.8, ease: 'power2.out' });
        const yTo = gsap.quickTo(parallax, 'y', { duration: 0.8, ease: 'power2.out' });

        const handlePointerMove = (e: PointerEvent) => {
          if (isMotionOff()) return;
          if (window.scrollY > window.innerHeight) return;
          const normX = (e.clientX / window.innerWidth - 0.5) * 12;
          const normY = (e.clientY / window.innerHeight - 0.5) * 8;
          xTo(normX);
          yTo(normY);
        };

        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        return () => window.removeEventListener('pointermove', handlePointerMove);
      }
    }, containerRef);

    // 4. Observe data-motion toggle changes
    const observer = new MutationObserver(() => {
      if (isMotionOff()) {
        ctx.revert();
        gsap.set([inner, parallax], { opacity: 1, y: 0, scale: 1, x: 0, filter: 'none' });
      } else {
        ScrollTrigger.refresh();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-motion'],
    });

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="scene-backdrop" aria-hidden="true">
      <div className="artifact-fallback">
        <div
          ref={innerRef}
          className="portrait-inner"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            willChange: 'transform, opacity, filter',
            transformOrigin: 'center center',
          }}
        >
          <div
            ref={parallaxRef}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              willChange: 'transform',
            }}
          >
            <Image
              src="/images/areen-hero.jpg"
              alt="Areen Joshi portrait"
              width={883}
              height={1024}
              priority
              fetchPriority="high"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 20%',
                width: '100%',
                height: '100%',
                filter: 'contrast(1.05) brightness(0.95)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceneBackdrop;
