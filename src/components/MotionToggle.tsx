'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export const MotionToggle: React.FC = () => {
  const [motionOn, setMotionOn] = useState(true);

  useEffect(() => {
    // Check user preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setMotionOn(false);
      document.documentElement.setAttribute('data-motion', 'off');
    } else {
      document.documentElement.setAttribute('data-motion', 'on');
    }
  }, []);

  const toggleMotion = () => {
    const nextState = !motionOn;
    setMotionOn(nextState);
    document.documentElement.setAttribute('data-motion', nextState ? 'on' : 'off');
  };

  return (
    <button
      className="motion-toggle"
      aria-label={motionOn ? 'Motion on — click to disable' : 'Motion off — click to enable'}
      aria-pressed={!motionOn}
      onClick={toggleMotion}
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 50,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
      }}
    >
      {motionOn ? <Pause size={11} /> : <Play size={11} />}
      <span>MOTION {motionOn ? 'ON' : 'OFF'}</span>
    </button>
  );
};

export default MotionToggle;
