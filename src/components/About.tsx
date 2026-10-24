'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SignalText } from './SignalText';

interface Discipline {
  id: string;
  name: string;
  tag: string;
  shapeClass: string;
  centerLabel: string;
  kicker: string;
  title: string;
  description: string;
  details: string[];
}

const DISCIPLINES: Discipline[] = [
  {
    id: 'ml',
    name: 'Build',
    tag: 'APPLIED MACHINE LEARNING',
    shapeClass: 'shape-ripples',
    centerLabel: 'VALIDATE',
    kicker: '01 / SUPERVISED & DEEP LEARNING',
    title: 'Model development grounded in empirical baselines.',
    description:
      'Developing structured ML systems requires more than importing estimators. I focus on leak-free preprocessing, feature engineering, cross-validation splits, and rigorous residual analysis across classification and regression benchmarks.',
    details: [
      'Scikit-learn ColumnTransformer & reusable numerical pipelines',
      'Artificial neural network classifiers built in TensorFlow/Keras',
      'ElasticNet, Gradient Boosting, and baseline model comparisons',
    ],
  },
  {
    id: 'llm',
    name: 'Chain',
    tag: 'LLM APPLICATION ENGINEERING',
    shapeClass: 'shape-constellation',
    centerLabel: 'STRUCTURE',
    kicker: '02 / REASONING & REST APIS',
    title: 'Chaining LLM interactions into production REST endpoints.',
    description:
      'Moving past prompt-only demos into deterministic, inspectable software. Using LangChain Expression Language (LCEL) and FastAPI to build asynchronous inference pipelines with dynamic prompt injection, schema validation, and structured output parsing.',
    details: [
      'Declarative prompt templates and JSON output parsing',
      'FastAPI & LangServe for RESTful inference endpoints',
      'Groq-hosted model integration with latency considerations',
    ],
  },
  {
    id: 'mlops',
    name: 'Track',
    tag: 'MLOPS & REPRODUCIBILITY',
    shapeClass: 'shape-ripples',
    centerLabel: 'LIFECYCLE',
    kicker: '03 / EXPERIMENTS & REGISTRY',
    title: 'Every hyperparameter, metric, and artifact preserved.',
    description:
      'Machine learning code is only as useful as its reproducibility. I instrument runs with MLflow and DAGsHub remote tracking to maintain an immutable audit trail of hyperparameters, RMSE/MAE/R² metrics, and serialized model artifacts.',
    details: [
      'MLflow experiment logging and model artifact versioning',
      'DAGsHub remote repository and parameter comparison',
      'Reproducible Conda environments and clean modular code',
    ],
  },
];

export const About: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeDiscipline = DISCIPLINES[activeIdx];

  return (
    <section id="about" className="about chapter solid-section">
      <div className="section-label">
        <span>01 / THE PERSON BEHIND THE WORK</span>
        <span>A CONNECTED PERSPECTIVE</span>
      </div>

      <div className="about-grid">
        <div className="about-copy" data-reveal="true">
          <h2>
            Theory is
            <br />
            the starting point.
            <br />
            <em>Reproducibility is the standard.</em>
          </h2>

          <p className="lead">
            I connect machine learning, LLM systems, and reliable software engineering.
          </p>

          <p>
            As an Artificial Intelligence undergraduate at Medi-Caps University, I focus on turning
            algorithms and foundation models into{' '}
            <strong className="copy-highlight">
              practical, leak-free, deployable software systems.
            </strong>
          </p>

          <p>
            My work spans conventional supervised learning, end-to-end MLOps experiment tracking with
            MLflow, LLM chaining via LangChain LCEL and FastAPI, and upstream debugging in prominent
            Python open-source libraries.
          </p>

          <a className="text-link" href="#work">
            Explore the systems <ArrowUpRight size={16} />
          </a>

          <div className="identity-notes">
            <span>AI/ML ENGINEER.</span>
            <span>SYSTEMS BUILDER.</span>
            <span>OPEN SOURCE CONTRIBUTOR.</span>
          </div>
        </div>

        <div className="signal-explorer signal-about">
          <div className="signal-topline">
            <span className="eyebrow">THREE DISCIPLINES. ONE PERSPECTIVE.</span>
            <span aria-hidden="true">0{activeIdx + 1} / 03</span>
          </div>

          <div className="signal-visual" aria-hidden="true">
            <div className={`signal-fallback ${activeDiscipline.shapeClass}`}>
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="signal-center-label">
              <SignalText>{activeDiscipline.centerLabel}</SignalText>
            </span>
          </div>

          <div
            className="signal-options"
            role="group"
            aria-label="Explore my disciplines"
          >
            {DISCIPLINES.map((item, idx) => (
              <button
                key={item.id}
                aria-pressed={activeIdx === idx}
                onClick={() => setActiveIdx(idx)}
              >
                <span>{item.name}</span>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>

          <div className="signal-story">
            <span className="eyebrow">{activeDiscipline.kicker}</span>
            <h3 style={{ fontSize: '20px', margin: '8px 0', fontFamily: 'var(--font-display)' }}>
              {activeDiscipline.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6' }}>
              {activeDiscipline.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
