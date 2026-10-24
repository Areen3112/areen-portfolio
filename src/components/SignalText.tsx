'use client';

import React, { useState, useCallback, useRef } from 'react';

interface SignalTextProps {
  children: string;
  className?: string;
}

const GLYPHS = 'ABCDEF0123456789_#@!$%&+-*/=';

export const SignalText: React.FC<SignalTextProps> = ({ children, className = '' }) => {
  const [displayText, setDisplayText] = useState(children);
  const animRef = useRef<number | null>(null);

  const triggerScramble = useCallback(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);

    const length = children.length;
    let frame = 0;
    const totalFrames = 18;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames;
      const solvedCount = Math.floor(progress * length);

      let scrambled = '';
      for (let i = 0; i < length; i++) {
        if (children[i] === ' ') {
          scrambled += ' ';
        } else if (i < solvedCount) {
          scrambled += children[i];
        } else {
          scrambled += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplayText(scrambled);

      if (frame < totalFrames) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(children);
      }
    };

    animRef.current = requestAnimationFrame(tick);
  }, [children]);

  return (
    <span
      className={`signal-text ${className}`}
      onMouseEnter={triggerScramble}
    >
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="signal-text-size">{children}</span>
      <span aria-hidden="true" className="signal-text-live">{displayText}</span>
    </span>
  );
};

export default SignalText;
