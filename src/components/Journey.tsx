'use client';

import React from 'react';
import { SignalText } from './SignalText';

export const Journey: React.FC = () => {
  const milestones = [
    {
      year: '2024',
      title: 'B.Tech in Artificial Intelligence',
      description:
        'Enrolled at Medi-Caps University, Indore, building a solid foundation in Data Structures, Machine Learning theory, Database Systems, and Discrete Mathematics (Current GPA: 8.32/10).',
    },
    {
      year: '2024–2025',
      title: 'Practical Systems Exploration',
      description:
        'Initiated hands-on machine learning projects, developing end-to-end churn prediction with TensorFlow/Keras and RESTful LCEL conversational microservices with FastAPI and Groq.',
    },
    {
      year: '2025',
      title: 'Upstream Open Source & MLOps',
      description:
        'Investigated real issues in established Python libraries (Streamlit, LangGraph, Kornia) and instrumented multi-run experiment tracking pipelines with MLflow and DAGsHub.',
    },
    {
      year: 'TODAY & NEXT',
      title: 'Targeting AI/ML Engineering Internships',
      description:
        'Focused on building verifiable, production-ready AI systems, continuing upstream open-source contributions, and preparing for high-impact AI/ML engineering internships for 2026/2027.',
    },
  ];

  return (
    <section id="journey" className="journey chapter solid-section">
      <div className="section-label">
        <span>
          <SignalText>INTERLUDE / STILL BECOMING</SignalText>
        </span>
        <span>A JOURNEY IN MOTION</span>
      </div>

      <div className="journey-grid">
        <h2 data-reveal="true">
          Started with curiosity.
          <br />
          <em>Kept building systems.</em>
        </h2>

        <div className="timeline">
          {milestones.map((item, idx) => (
            <article key={idx} data-reveal="true">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
