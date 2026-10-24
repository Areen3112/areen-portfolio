'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ArrowUp, Mail, Copy, Check } from 'lucide-react';
import { SignalText } from './SignalText';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'areenjoshi@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact chapter">
      <div className="section-label">
        <span>
          <SignalText>07 / THE NEXT CHAPTER</SignalText>
        </span>
        <span>OPEN TO MEANINGFUL CONVERSATIONS</span>
      </div>

      <div className="contact-inner" data-reveal="true">
        <span className="availability">
          <i /> OPEN FOR AI/ML INTERNSHIPS &amp; RESEARCH (2026–2027)
        </span>

        <h2>
          Something great
          <br />
          starts with <em>a hello.</em>
        </h2>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', margin: '24px 0' }}>
          <a
            className="contact-cta"
            href="https://linkedin.com/in/areen-joshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={24} />
          </a>

          <button
            onClick={copyEmail}
            className="pill-link"
            style={{
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 24px',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {copied ? <Check size={16} color="#56c271" /> : <Mail size={16} />}
            <span>{copied ? 'Copied to clipboard!' : email}</span>
            {!copied && <Copy size={13} style={{ opacity: 0.6 }} />}
          </button>
        </div>

        <p>
          AI engineering internships, research opportunities, open-source projects, and technical discourse.
          <br />
          If our engineering interests overlap, I’d love to connect.
        </p>
      </div>

      <footer>
        <a className="footer-name" href="#top">
          Areen Joshi<span>.</span>
        </a>

        <div className="socials">
          <a
            href="https://linkedin.com/in/areen-joshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={12} />
          </a>
          <a
            href="https://github.com/Areen3112"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={12} />
          </a>
          <a
            href="mailto:areenjoshi@gmail.com"
          >
            Email <ArrowUpRight size={12} />
          </a>
          <a
            className="back-top"
            href="#top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AREEN JOSHI</span>
          <span>BUILT WITH INTENT. ALWAYS REPRODUCIBLE.</span>
          <span>INDORE, INDIA ↗ THE WORLD</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
