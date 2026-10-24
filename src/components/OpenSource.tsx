'use client';

import React from 'react';
import { ArrowUpRight, GitPullRequest, GitCommit, GitBranch, Terminal } from 'lucide-react';
import { SignalText } from './SignalText';

interface Contribution {
  repo: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  prUrl: string;
  icon: React.ReactNode;
  codeSnippet: string;
}

const CONTRIBUTIONS: Contribution[] = [
  {
    repo: 'streamlit / streamlit',
    tag: 'ISSUE #12079 · PR #12081',
    title: 'Chat Input Height Reset After Submission',
    subtitle: 'Streamlit UI Component State Maintenance',
    description:
      'Diagnosed the stateful retention bug in st.chat_input where dynamic textareas failed to shrink back to their single-line resting height following message submission. Investigated frontend event hooks and submitted proposed PR #12081.',
    prUrl: 'https://github.com/streamlit/streamlit/issues/12079',
    icon: <GitPullRequest size={18} color="var(--blue)" />,
    codeSnippet: 'st.chat_input(placeholder="Enter message...") // height auto-reset patch',
  },
  {
    repo: 'langchain-ai / langgraph',
    tag: 'ISSUE #5815 · PR #5817',
    title: 'Windows CLI Dependency Path Normalization',
    subtitle: 'Cross-Platform File System Resolution',
    description:
      'Identified and resolved CLI dependency failure on Windows machines by normalizing backward slashes (\\) to POSIX-style forward paths (/) during local agent module imports, ensuring deterministic graph execution.',
    prUrl: 'https://github.com/langchain-ai/langgraph/issues/5815',
    icon: <Terminal size={18} color="#78b0f8" />,
    codeSnippet: 'path = PureWindowsPath(raw_dep).as_posix() // cross-platform resolution',
  },
  {
    repo: 'kornia / kornia',
    tag: 'PR #5713 · 985 TESTS PASSED',
    title: 'Tensor Shear-Range Validation in Augmentations',
    subtitle: 'PyTorch Computer Vision Augmentation',
    description:
      'Implemented strict input dimension and range checks in geometric shear augmentation functions, preventing runtime silent degradation. Ran and verified 985 passing test cases across the PyTorch tensor suite.',
    prUrl: 'https://github.com/kornia/kornia/pull/5713',
    icon: <GitBranch size={18} color="#56c271" />,
    codeSnippet: 'torch.testing.assert_close(shear(tensor), expected) // 985 passed',
  },
  {
    repo: 'numpy / numpy',
    tag: 'DOCUMENTATION & INVESTIGATION',
    title: 'Matrix Multiplication with 1D Arrays',
    subtitle: 'Linear Algebra Semantics & API Notes',
    description:
      'Analyzed behavior discrepancies and documented edge cases when performing np.matrix multiplication against one-dimensional vectors, outlining expected broadcasting rules and migration paths toward ndarray.',
    prUrl: 'https://github.com/numpy/numpy',
    icon: <GitCommit size={18} color="#e6985a" />,
    codeSnippet: 'np.matmul(matrix, vector.reshape(-1, 1)) // dimensional clarity',
  },
];

export const OpenSource: React.FC = () => {
  return (
    <section id="content" className="media-showcase chapter solid-section">
      <div className="section-label">
        <span>
          <SignalText>05 / OPEN SOURCE CONTRIBUTIONS</SignalText>
        </span>
        <span>UPSTREAM CODE. REAL CODEBASES.</span>
      </div>

      <div className="selected-heading" data-editorial-reveal="true" style={{ marginTop: '30px' }}>
        <h2>
          Investigating bugs.
          <br />
          <em>Improving real software.</em>
        </h2>
        <p>
          Beyond self-directed repositories: diving into existing large-scale codebases,
          <br />
          reproducing edge cases, reading maintainer feedback, and contributing upstream.
        </p>
      </div>

      <div className="film-grid" style={{ marginTop: '50px' }}>
        {CONTRIBUTIONS.map((item, idx) => (
          <article key={idx} className="film-card" style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', overflow: 'hidden' }}>
            <div
              className="film-screen"
              style={{
                background: '#070707',
                padding: '24px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                minHeight: '110px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.icon}
                  {item.repo}
                </span>
                <span style={{ color: '#777', fontSize: '9px' }}>UPSTREAM</span>
              </div>
              <div style={{ color: '#aaa', background: '#030303', padding: '8px 12px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)', marginTop: '12px' }}>
                <code>{item.codeSnippet}</code>
              </div>
            </div>

            <div className="film-caption" style={{ padding: '22px' }}>
              <span className="eyebrow" style={{ color: 'var(--blue)' }}>{item.tag}</span>
              <h3 style={{ fontSize: '18px', margin: '8px 0 6px', fontFamily: 'var(--font-display)' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                {item.description}
              </p>
              <a
                href={item.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--ink)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                }}
              >
                Inspect on GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
