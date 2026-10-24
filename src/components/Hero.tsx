'use client';

import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SignalText } from './SignalText';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-topline">
        <span>
          <i className="live-dot" /> AI/ML ENGINEER · LLM SYSTEMS · MLOPS
        </span>
        <span>BASED IN INDORE, INDIA · MEDICAPS &apos;28</span>
      </div>

      <div className="hero-content">
        <span className="hero-kicker">
          <SignalText>APPLIED MACHINE LEARNING &amp; LLM SYSTEMS</SignalText>
        </span>

        <h1>
          <span className="line-mask">
            <span className="reveal-line">
              Areen <em>Joshi</em>
            </span>
          </span>
        </h1>

        <div className="hero-description">
          <p>
            Building practical, reproducible AI applications,
            <br className="desktop-break" /> LLM pipelines, and the engineering behind them.
          </p>

          <div className="hero-actions">
            <a className="pill-link" href="#work">
              <SignalText>Explore my work</SignalText>
              <ArrowDown size={16} />
            </a>
            <a className="text-link" href="#contact">
              <SignalText>Start a conversation</SignalText>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-side-note">
        <span>01 / PRESENCE</span>
        <span>
          APPLIED MACHINE LEARNING<br />
          LLM APPLICATION ENGINEERING<br />
          MLOPS &amp; REPRODUCIBILITY
        </span>
      </div>

      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-line" /> SCROLL TO DISCOVER{' '}
          <ArrowDown size={13} />
        </a>
        <span>BUILDING &amp; EXPERIMENTING SINCE 2024</span>
        <span className="hero-edition">REPRODUCIBLE SYSTEMS ↗</span>
      </div>
    </section>
  );
};

export default Hero;
