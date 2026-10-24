'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Presentation, Code2 } from 'lucide-react';
import { SignalText } from './SignalText';

export const Speaking: React.FC = () => {
  return (
    <section className="voice chapter solid-section" id="speaking">
      <div className="section-label">
        <span>
          <SignalText>06 / TECHNICAL DISCOURSE &amp; PRESENTATIONS</SignalText>
        </span>
        <span>COMMUNICATING COMPLEXITY</span>
      </div>

      <div className="stage-image" data-reveal="true" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', maxHeight: '550px' }}>
        <Image
          src="/images/areen-presenting.jpg"
          alt="Areen Joshi presenting on architectural complexity in multi-model AI systems"
          width={768}
          height={1024}
          sizes="90vw"
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '550px',
            objectFit: 'cover',
            objectPosition: 'center 25%',
          }}
        />
        <div className="stage-shade" />

        <div className="stage-copy">
          <span className="eyebrow">COMMUNICATION &amp; ARCHITECTURAL RIGOR</span>
          <h2>
            Make it clear.
            <br />
            Make it <em>count.</em>
          </h2>
          <a
            className="pill-link"
            href="https://linkedin.com/in/areen-joshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>

        <span className="stage-footnote">ACADEMIC SESSIONS · SYSTEM ARCHITECTURE · PEER LEARNING</span>
      </div>

      <div className="voice-grid" style={{ marginTop: '50px' }}>
        <div>
          <h3>
            Articulating trade-offs.
            <br />
            Connecting theory to systems.
          </h3>
          <p>
            Technical discourse at Medi-Caps University and student workshops, focusing on the engineering
            realities of deploying AI: model latency, architectural complexity, data leakage, and system
            maintenance.
          </p>

          <div className="speaking-topics">
            <span>AI System Architecture</span>
            <span>Multi-Model Complexity Risks</span>
            <span>MLOps &amp; Experiment Tracking</span>
            <span>LLM Orchestration with LCEL</span>
            <span>Leak-Free Data Preprocessing</span>
          </div>
        </div>

        <div className="content-list">
          <div
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--blue)', marginBottom: '8px' }}>
              <Presentation size={18} />
              <span className="eyebrow">LECTURE SESSION · MEDI-CAPS UNIVERSITY</span>
            </div>
            <h4 style={{ fontSize: '16px', margin: '4px 0 8px', color: '#fff' }}>
              Architectural Complexity in Multi-Model Systems
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
              Analyzing the risks of cascading latency, heterogeneous database layers, and maintenance overhead
              when composing chained LLM systems.
            </p>
          </div>

          <div
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#78b0f8', marginBottom: '8px' }}>
              <Code2 size={18} />
              <span className="eyebrow">WORKSHOP &amp; PEER COLLABORATION</span>
            </div>
            <h4 style={{ fontSize: '16px', margin: '4px 0 8px', color: '#fff' }}>
              Reproducible ML Workflows with MLflow
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
              Demonstrating parameter autologging, remote artifact synchronization via DAGsHub, and model registry
              governance for undergraduate machine learning cohorts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
