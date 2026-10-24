'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { SignalText } from './SignalText';

interface ExpertisePillar {
  id: string;
  index: string;
  category: string;
  title: string;
  steps: string[];
  description: string;
  strengths: string;
}

const PILLARS: ExpertisePillar[] = [
  {
    id: 'pillar-0',
    index: '01',
    category: 'MODEL DEVELOPMENT & VALIDATION',
    title: 'Build with empirical baselines.',
    steps: [
      'Define problem & primary evaluation metric',
      'Prevent feature leakage & construct simple baseline',
      'Validate with k-fold CV and residual error analysis',
    ],
    description:
      'I establish reproducible pipelines before tuning complex architectures. Feature scaling, categorical encoding via ColumnTransformer, and cross-validation splits are locked in to verify real performance gains over naive baselines.',
    strengths: 'Python · scikit-learn · TensorFlow · Keras · Feature Engineering · Cross-Validation',
  },
  {
    id: 'pillar-1',
    index: '02',
    category: 'LLM APPLICATION ENGINEERING',
    title: 'Chain reasoning with deterministic APIs.',
    steps: [
      'Structure prompts & validate dynamic inputs',
      'Compose declarative chains using LangChain LCEL',
      'Expose low-latency REST endpoints via FastAPI',
    ],
    description:
      'Bridging foundation models with reliable backend systems. Implementing declarative pipelines with LangChain Expression Language, JSON output parsing, and asynchronous API serving via FastAPI and LangServe.',
    strengths: 'LangChain LCEL · FastAPI · LangServe · Groq API · Prompt Engineering · REST APIs',
  },
  {
    id: 'pillar-2',
    index: '03',
    category: 'MLOPS & REPRODUCIBILITY',
    title: 'Track every run. Preserve every artifact.',
    steps: [
      'Instrument automated metric & hyperparameter logging',
      'Manage versioned model artifacts and registries',
      'Ensure environment isolation via Git and Conda',
    ],
    description:
      'Treating machine learning workflows with engineering discipline. Integrating MLflow and DAGsHub remote tracking to maintain complete provenance across iterations, hyperparameter sweeps, and model lifecycle states.',
    strengths: 'MLflow · DAGsHub · Git · Conda · TensorBoard · Linux · Model Registry',
  },
];

export const Expertise: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number>(0);
  const currentPillar = PILLARS[expandedIdx];

  return (
    <section className="expertise chapter solid-section" id="expertise">
      <div className="section-label">
        <span>03 / HOW I THINK &amp; WORK</span>
        <span>DEPTH MEETS PERSPECTIVE</span>
      </div>

      <div className="expertise-grid expertise-studio">
        <div className="expertise-intro">
          <h2>
            How I work.
            <br />
            <em>From data to deployment.</em>
          </h2>
          <p className="muted">Choose a discipline. Follow the methodology.</p>

          <div className="thinking-path" aria-live="polite">
            <span className="eyebrow">
              <SignalText>{currentPillar.category}</SignalText>
            </span>
            <ol>
              {currentPillar.steps.map((step, idx) => (
                <li key={idx} style={{ animationDelay: `${idx * 70}ms` }}>
                  <span>0{idx + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <a href="#work" className="text-link">
              Explore the engineering <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="expertise-list">
          {PILLARS.map((pillar, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <article
                key={pillar.id}
                className={`expertise-item ${isExpanded ? 'expanded' : ''}`}
              >
                <h3>
                  <button
                    aria-expanded={isExpanded}
                    aria-controls={pillar.id}
                    onClick={() => setExpandedIdx(idx)}
                  >
                    <span>
                      <small className="eyebrow">
                        <SignalText>{`${pillar.index} / ${pillar.category}`}</SignalText>
                      </small>
                      {pillar.title}
                    </span>
                    {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                </h3>

                {isExpanded && (
                  <div className="expertise-body" id={pillar.id}>
                    <p>{pillar.description}</p>
                    <p className="strengths">{pillar.strengths}</p>
                    <a href="#about" className="expertise-depth">
                      Technical background &amp; methodology <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
