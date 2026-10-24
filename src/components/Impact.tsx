'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SignalText } from './SignalText';

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="impact-stage chapter">
      <div className="impact-stage-content">
        <div className="section-label">
          <span>
            <SignalText>04 / THE WORK, MULTIPLIED</SignalText>
          </span>
          <span>ACCURACY. RIGOR. REPRODUCIBILITY.</span>
        </div>

        <div className="impact-title" data-editorial-reveal="true">
          <h2>
            Metrics are a standard.
            <br />
            <em>Integrity is personal.</em>
          </h2>
          <p>
            Every experiment, test split, and pipeline
            <br />
            is verified against transparent, reproducible baselines.
          </p>
        </div>

        <div className="impact-lead" data-editorial-reveal="true">
          <div className="impact-value">
            <span>82%</span>
            <em>R²</em>
          </div>
          <div className="impact-context">
            <h3>
              Optimized ElasticNet.
              <br />
              Reproducibly logged.
            </h3>
            <p>
              Systematic hyperparameter search across 20+ runs in MLflow &amp; DAGsHub.
              <br />
              Automated tracking of RMSE, MAE, and serialized model weights with zero manual guesswork.
            </p>
            <a className="text-link" href="#work">
              Explore experiment records <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="impact-pair">
          <div data-editorial-reveal="true">
            <strong>
              84–88%<em>acc</em>
            </strong>
            <h3>Customer Churn Classification</h3>
            <p>
              Trained deep Artificial Neural Network on 10,000+ records with dropout regularization and
              TensorBoard loss curve monitoring.
            </p>
          </div>

          <div data-editorial-reveal="true">
            <strong>
              8.32<em>/10</em>
            </strong>
            <h3>Academic Standing in AI</h3>
            <p>
              Undergraduate degree in Artificial Intelligence at Medi-Caps University with strong CS,
              mathematics, and software fundamentals.
            </p>
          </div>

          <div className="impact-principle" data-editorial-reveal="true">
            <span className="eyebrow">THE COMMON THREAD</span>
            <p>
              Baseline first.
              <br />
              Prevent data leakage.
              <br />
              <em>Verify before claiming.</em>
            </p>
          </div>
        </div>

        <div className="brand-story" data-editorial-reveal="true">
          <div className="brand-story-heading">
            <span className="eyebrow">ENGINEERING INTEGRITY / NO INFLATED METRICS</span>
            <h3>
              From a notebook.
              <br />
              <em>To an audited pipeline.</em>
            </h3>
            <p>
              Too many AI portfolios report inflated metrics on leaked test sets or showcase brittle prompt
              wrappers. I prioritize{' '}
              <strong className="copy-highlight">
                reproducible environments, modular preprocessing, and verifiable results
              </strong>{' '}
              that stand up to technical scrutiny.
            </p>
            <a className="text-link" href="#about">
              Read my methodology <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
