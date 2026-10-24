# Areen Joshi — Personal Portfolio

An authentic, high-performance personal portfolio website built with Next.js 15 (App Router), React 19, Lenis smooth scrolling, GSAP/Framer-style text reveals, Lucide icons, and modern SCSS/CSS variables.

Modeled faithfully after the editorial design language of Sarthak Sharma's portfolio, with authentic content tailored for AI/ML engineering internships, research opportunities, and open-source contributions.

---

## Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router) + React 19 + Turbopack
- **Smooth Scroll**: Lenis (`lenis`)
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Google Fonts (`DM Sans`, `Instrument Serif`, `JetBrains Mono`)
- **Styling**: Modern CSS variables, glassmorphic filters, responsive clamp layouts
- **AI Engine Optimization (AIO)**: `/llms.txt`, `/robots.txt`, and JSON-LD structured schema (`Person`, `ProfilePage`)

---

## Website Structure

1. **Floating Glass Navigation**: Wordmark, responsive section links with scramble hover effects, mobile drawer, and hide-on-scroll logic.
2. **Hero Section (`#top`)**: Live status indicator, editorial headline with italic serif accent, call-to-actions, and background masked portrait.
3. **Empirical Proof Strip**: Verified academic standing (8.32/10 GPA), 20+ MLflow runs, 3+ upstream open source repos.
4. **Chapter 01: The Engineer Behind the Work (`#about`)**: Narrative positioning with an interactive 3-discipline explorer (Model Development, LLM Pipelines, MLOps Lifecycle).
5. **Chapter 02: Selected Systems (`#work`)**:
   - MLOps Experiment Tracking & Model Registry System (MLflow, DAGsHub, scikit-learn ElasticNet)
   - LCEL Chatbot Application (LangChain LCEL, FastAPI, LangServe, Groq LLM API)
   - Bank Customer Churn Prediction (TensorFlow/Keras ANN, TensorBoard, Streamlit)
   - Student Performance Regression Pipeline (scikit-learn ColumnTransformer, 8 benchmarked models)
6. **Chapter 03: How I Think & Work (`#expertise`)**: Interactive 3-pillar accordion with procedural steps and core competencies.
7. **Chapter 04: Engineering Benchmarks (`#impact`)**: Transparent accuracy and $R^2$ metrics without inflated claims.
8. **Chapter 05: Open Source Contributions (`#content`)**: Changelog of upstream contributions (Streamlit, LangGraph, Kornia, NumPy).
9. **Chapter 06: Technical Discourse & Presentations (`#speaking`)**: Features authentic lecture presentation photo at the podium on multi-model system architecture.
10. **Interlude: A Journey in Motion (`#journey`)**: Milestone timeline from 2024 to present.
11. **Chapter 07: The Next Chapter (`#contact`)**: One-click email copy, LinkedIn, GitHub, smooth back-to-top, and a reduced-motion toggle.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
