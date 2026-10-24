import React from 'react';
import SceneBackdrop from '@/components/SceneBackdrop';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import About from '@/components/About';
import SelectedWork from '@/components/SelectedWork';
import Expertise from '@/components/Expertise';
import Impact from '@/components/Impact';
import OpenSource from '@/components/OpenSource';
import Speaking from '@/components/Speaking';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <SceneBackdrop />
      <Navigation />
      <main id="main">
        <Hero />
        <ProofStrip />
        <About />
        <SelectedWork />
        <Expertise />
        <Impact />
        <OpenSource />
        <Speaking />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
