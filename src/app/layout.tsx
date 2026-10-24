import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { MotionToggle } from '@/components/MotionToggle';

export const viewport: Viewport = {
  themeColor: '#030303',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Areen Joshi | AI/ML Engineer & Systems Builder',
  description:
    'Personal portfolio of Areen Joshi. Artificial Intelligence undergraduate at Medi-Caps University specializing in applied machine learning, LLM systems, model evaluation, and MLOps infrastructure.',
  keywords: [
    'Areen Joshi',
    'AI Engineer',
    'Machine Learning',
    'MLOps',
    'LangChain LCEL',
    'FastAPI',
    'TensorFlow',
    'scikit-learn',
    'Medi-Caps University',
  ],
  authors: [{ name: 'Areen Joshi', url: 'https://github.com/Areen3112' }],
  metadataBase: new URL('https://areen-portfolio.vercel.app'),
  alternates: {
    canonical: 'https://areen-portfolio.vercel.app',
  },
  openGraph: {
    title: 'Areen Joshi | AI/ML Engineer & Systems Builder',
    description:
      'Artificial Intelligence undergraduate specializing in applied machine learning, LLM systems, and reproducible MLOps pipelines.',
    url: 'https://areen-portfolio.vercel.app',
    siteName: 'Areen Joshi',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areen Joshi | AI/ML Engineer & Systems Builder',
    description:
      'Artificial Intelligence undergraduate specializing in applied machine learning, LLM systems, and reproducible MLOps pipelines.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Areen Joshi',
    url: 'https://areen-portfolio.vercel.app',
    jobTitle: 'AI/ML Engineer',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Medi-Caps University',
    },
    sameAs: [
      'https://github.com/Areen3112',
      'https://linkedin.com/in/areen-joshi',
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <SmoothScroll>
          {children}
          <MotionToggle />
        </SmoothScroll>
      </body>
    </html>
  );
}
