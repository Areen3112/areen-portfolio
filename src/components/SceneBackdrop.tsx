'use client';

import React from 'react';
import Image from 'next/image';

export const SceneBackdrop: React.FC = () => {
  return (
    <div className="scene-backdrop" aria-hidden="true">
      <div className="artifact-fallback">
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
  );
};

export default SceneBackdrop;
