'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ProofStrip: React.FC = () => {
  return (
    <section className="proof-strip" aria-label="Career highlights">
      <div>
        <strong>
          8.32<span>/10</span>
        </strong>
        <p>GPA across core Artificial Intelligence &amp; CS coursework</p>
      </div>

      <div>
        <strong>
          20<span>+</span>
        </strong>
        <p>experiments &amp; model runs tracked with MLflow and DAGsHub</p>
      </div>

      <div>
        <strong>
          3<span>+</span>
        </strong>
        <p>upstream open-source repositories investigated &amp; contributed to</p>
      </div>

      <a href="#work">
        THE WORK.<br />
        THE EMPIRICAL PROOF.
        <ArrowUpRight size={22} />
      </a>
    </section>
  );
};

export default ProofStrip;
