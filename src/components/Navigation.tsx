'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SignalText } from './SignalText';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !isOpen) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Systems' },
    { href: '#content', label: 'Open Source' },
    { href: '#speaking', label: 'Speaking' },
  ];

  return (
    <header
      className="navigation refined-navigation glass-navigation"
      data-hidden={isHidden ? 'true' : 'false'}
    >
      <a className="wordmark" href="#top" aria-label="Areen Joshi">
        <span className="nav-identity">
          <span>Areen Joshi</span>
          <small>AI / ML ENGINEER</small>
        </span>
      </a>

      <nav
        className={`nav-links ${isOpen ? 'is-open' : ''}`}
        aria-label="Main navigation"
        id="main-nav"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            className="nav-destination"
            href={item.href}
            onClick={() => setIsOpen(false)}
          >
            <SignalText>{item.label}</SignalText>
            <span className="nav-mobile-arrow" aria-hidden="true">↗</span>
          </a>
        ))}

        <a
          className="nav-contact"
          href="#contact"
          onClick={() => setIsOpen(false)}
        >
          <SignalText>Let’s talk</SignalText>
          <ArrowUpRight size={16} />
        </a>
      </nav>

      <button
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="main-nav"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? 'Close' : 'Menu'}</span>
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </header>
  );
};

export default Navigation;
