'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SignalText } from './SignalText';

interface Project {
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  domain: string;
  metricBadge: string;
  metaCategory: string;
  githubUrl: string;
  visualMockup: React.ReactNode;
}

export const SelectedWork: React.FC = () => {
  const projects: Project[] = [
    {
      number: '01',
      category: 'ML Infrastructure & MLOps',
      title: 'MLOps Experiment Tracking & Model Registry System',
      tagline: 'Automating experiment tracking, versioning, and reproducibility.',
      description:
        'Engineered an experiment tracking and model management system across 20+ ML experiments. Standardized metric logging (RMSE, MAE, R²) and artifact versioning with MLflow and DAGsHub remote tracking, achieving 82% R² with an optimized ElasticNet model.',
      domain: 'dagshub.com/Areen3112/mlops-tracking',
      metricBadge: '20+ EXPERIMENTS · R² = 0.82',
      metaCategory: 'MLFLOW & DAGSHUB PIPELINE',
      githubUrl: 'https://github.com/Areen3112',
      visualMockup: (
        <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#c4b5a0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ color: 'var(--blue)' }}>● RUN: elasticnet_opt_run_021</span>
            <span style={{ color: '#888' }}>ARTIFACT_URI: s3://dagshub/models/v1.2</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <div style={{ color: '#777', marginBottom: '4px' }}>// HYPERPARAMETERS</div>
              <div>alpha: 0.1200</div>
              <div>l1_ratio: 0.4500</div>
              <div>max_iter: 2000</div>
              <div>standardize: True</div>
            </div>
            <div>
              <div style={{ color: '#777', marginBottom: '4px' }}>// VALIDATION METRICS</div>
              <div style={{ color: '#fff' }}>R² Score: <span style={{ color: 'var(--blue)' }}>0.8214</span></div>
              <div>RMSE: 0.5392</div>
              <div>MAE: 0.4108</div>
              <div style={{ color: '#56c271' }}>status: MODEL_REGISTERED (PROD)</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      category: 'LLM Application Engineering',
      title: 'LCEL Chatbot Application & API Service',
      tagline: 'Composing deterministic reasoning flows over FastAPI & Groq.',
      description:
        'Architected an end-to-end conversational service utilizing LangChain Expression Language (LCEL). Connected dynamic prompt templating, schema-enforced output parsers, and low-latency Groq-hosted LLMs, exposed as production REST APIs using FastAPI and LangServe.',
      domain: 'github.com/Areen3112/LCEL_Chatbot_app',
      metricBadge: 'LANGCHAIN LCEL · FASTAPI · GROQ',
      metaCategory: 'REST API & REASONING CHAIN',
      githubUrl: 'https://github.com/Areen3112/LCEL_Chatbot_app',
      visualMockup: (
        <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#c4b5a0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ color: '#78b0f8' }}>POST /lcel/chat/invoke</span>
            <span style={{ color: '#56c271' }}>200 OK · 142ms</span>
          </div>
          <div style={{ color: '#aaa', lineHeight: '1.6' }}>
            <span style={{ color: 'var(--blue)' }}>chain =</span> prompt_template | ChatGroq(model=&quot;llama-3.3-70b-versatile&quot;) | JsonOutputParser()
          </div>
          <div style={{ background: '#070707', borderRadius: '4px', padding: '10px', marginTop: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ color: '#888' }}>// OUTPUT PAYLOAD</div>
            <div style={{ color: '#eee' }}>{`{"intent": "system_query", "entities": ["mlflow", "registry"], "confidence": 0.985}`}</div>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      category: 'Supervised Learning & Classification',
      title: 'Bank Customer Churn Prediction System',
      tagline: 'Deep learning classification with real-time inference UI.',
      description:
        'Developed an Artificial Neural Network (ANN) classifier in TensorFlow/Keras on a dataset of 10,000+ banking records. Applied feature scaling, dropout regularization to suppress overfitting, monitored loss curves in TensorBoard, and deployed an interactive Streamlit inference UI.',
      domain: 'github.com/Areen3112/bank-churn-prediction',
      metricBadge: '10,000+ RECORDS · 84-88% ACCURACY',
      metaCategory: 'TENSORFLOW & STREAMLIT',
      githubUrl: 'https://github.com/Areen3112',
      visualMockup: (
        <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#c4b5a0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ color: '#e6985a' }}>MODEL: Sequential(Dense-128, Dropout(0.2), Dense-64, Dense-1)</span>
            <span style={{ color: '#888' }}>EPOCHS: 50</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '14px' }}>
            <div>
              <div style={{ color: '#777', marginBottom: '4px' }}>// TRAINING DYNAMICS (TENSORBOARD)</div>
              <div>Training Accuracy: 87.4%</div>
              <div>Validation Accuracy: <span style={{ color: 'var(--blue)' }}>86.2%</span></div>
              <div>Loss: 0.3241 (Binary Crossentropy)</div>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '14px' }}>
              <div style={{ color: '#777', marginBottom: '4px' }}>// STREAMLIT SERVING</div>
              <div style={{ color: '#56c271' }}>● Serving Port: 8501</div>
              <div style={{ color: '#aaa' }}>Latency: 18ms / sample</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      category: 'Regression & Model Comparison',
      title: 'Student Performance Regression Pipeline',
      tagline: 'Leakage-free preprocessing and benchmarking 8 estimators.',
      description:
        'Constructed modular preprocessing pipelines for categorical and continuous student features using scikit-learn ColumnTransformer, OneHotEncoder, and StandardScaler. Benchmarked 8 candidate algorithms, attaining an optimal R² score of 0.88.',
      domain: 'github.com/Areen3112/student-performance-pipeline',
      metricBadge: '8 BENCHMARKED MODELS · R² = 0.88',
      metaCategory: 'SCIKIT-LEARN PIPELINES',
      githubUrl: 'https://github.com/Areen3112',
      visualMockup: (
        <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#c4b5a0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ color: '#a0bdf8' }}>PIPELINE: ColumnTransformer &gt; ModelBenchmark</span>
            <span style={{ color: '#56c271' }}>LEAKAGE_TEST: PASSED</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', textAlign: 'center' }}>
            <div style={{ background: '#0e0e0e', padding: '8px 4px', borderRadius: '4px' }}>
              <div style={{ color: '#777', fontSize: '9px' }}>Ridge</div>
              <div style={{ color: '#ddd' }}>0.85</div>
            </div>
            <div style={{ background: '#0e0e0e', padding: '8px 4px', borderRadius: '4px' }}>
              <div style={{ color: '#777', fontSize: '9px' }}>RandomForest</div>
              <div style={{ color: '#ddd' }}>0.86</div>
            </div>
            <div style={{ background: 'rgba(255, 140, 89, 0.1)', border: '1px solid var(--blue)', padding: '8px 4px', borderRadius: '4px' }}>
              <div style={{ color: 'var(--blue)', fontSize: '9px' }}>GradientBoost</div>
              <div style={{ color: '#fff', fontWeight: 600 }}>0.88</div>
            </div>
            <div style={{ background: '#0e0e0e', padding: '8px 4px', borderRadius: '4px' }}>
              <div style={{ color: '#777', fontSize: '9px' }}>XGBoost</div>
              <div style={{ color: '#ddd' }}>0.87</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="work" className="selected-work chapter solid-section">
      <div className="section-label">
        <span>
          <SignalText>02 / SELECTED WORK</SignalText>
        </span>
        <span>BUILT. BENCHMARKED. VERIFIED.</span>
      </div>

      <div className="selected-heading" data-editorial-reveal="true">
        <h2>
          Ideas are a start.
          <br />
          <em>This is the work.</em>
        </h2>
        <p>
          From reproducible ML training pipelines to low-latency LLM inference APIs.
          <br />
          Practical AI systems built with verifiable code and clean engineering.
        </p>
      </div>

      <div className="work-gallery">
        {projects.map((proj) => (
          <article
            key={proj.number}
            className="work-piece"
            data-editorial-reveal="true"
            style={{ marginBottom: '60px' }}
          >
            <div className="work-artwork" style={{ background: '#0c0c0c', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
              <div className="project-visual real-work-visual platform-art">
                <div className="work-browser-bar">
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>{proj.domain}</span>
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    ↗
                  </a>
                </div>

                {proj.visualMockup}

                <div className="work-artifact-label">
                  <span>{proj.metaCategory}</span>
                  <span>{proj.metricBadge}</span>
                </div>
              </div>

              <span className="work-artwork-arrow">
                <ArrowUpRight size={22} />
              </span>
            </div>

            <div className="work-caption">
              <span className="work-number">{proj.number}</span>
              <div>
                <span className="eyebrow">{proj.category}</span>
                <h3>
                  <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                    {proj.title}
                  </a>
                </h3>
                <p>{proj.description}</p>
              </div>

              <a
                className="text-link"
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inspect repository <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
