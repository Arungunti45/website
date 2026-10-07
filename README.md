# AIOIN Company Website

> **Building Intelligent Digital Solutions for a Smarter Future.**

AIOIN is a modern, high-performance, production-quality corporate website for an international software, AI, and digital engineering company. Engineered with React 19, Vite, React Router, Framer Motion, Lucide React, and a modern custom CSS design system.

---

## 🌟 Key Highlights

- **13+ Production Pages & Dynamic Case Studies:**
  - `Home (/)` — Complete multi-section showcase (Hero, Stats, About, 8 Services, 8 Solutions, Tech Ecosystem, Filtered Portfolio, Idea-to-Impact Process, 11 Industries, Why AIOIN, CTA, Footer).
  - `About (/about)` — Mission, Vision, Origins, 6 Core Principles, Development Standards.
  - `Services (/services)` — Deep-dive into all 8 engineering services, business benefits, and lifecycles.
  - `Solutions (/solutions)` — Sector architectures (FinTech, Digital Gold, Healthcare, EdTech, Recruitment, ERP).
  - `Technologies (/technologies)` — Complete tech stack categories & third-party connector ecosystem.
  - `Industries (/industries)` — 11 vertical domain application breakdowns.
  - `Portfolio (/portfolio)` — Interactive filterable portfolio (All, Web, Mobile, AI, FinTech, Enterprise).
  - `Case Studies (/portfolio/:slug)` — 4 dynamic architectural deep dives (BreakZoo, Get Your Job, Smart College Canteen, Company Management System).
  - `Careers (/careers)` — 8 engineering job openings with interactive application modal & localStorage persistence.
  - `Contact (/contact)` — Full project proposal request form with validation, service & budget selectors, and localStorage service.
  - `Privacy (/privacy)` — Formatted legal data protection policies.
  - `Terms (/terms)` — Comprehensive service and website terms.
  - `404 Not Found (/*)` — Animated custom error fallback.
- **Enterprise Design System:**
  - Rich dark navy (`#0B1F3A`), electric blue (`#2563EB`), and violet (`#7C3AED`) palette with dark and light mode toggle.
  - Interactive SVG visualizer, rotating orbit rings, and floating technology cards in the Hero section.
  - Micro-animations powered by Framer Motion respecting `prefers-reduced-motion`.
  - Accessible keyboard navigation, ARIA attributes, semantic HTML5, and responsive viewports (375px to 1920px).
  - SEO metadata per route with Open Graph tags, `robots.txt`, and `sitemap.xml`.

---

## 🚀 Quick Start

### 1. Installation
```bash
# Navigate to the project directory
cd AIOIN-Company-Website

# Install all dependencies
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

### 3. Production Build & Test
```bash
# Create optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
AIOIN-Company-Website/
├── public/
│   ├── favicon.svg             # Custom AIOIN vector brand mark
│   ├── robots.txt              # Search crawler instructions
│   └── sitemap.xml             # XML sitemap for search engines
├── src/
│   ├── assets/                 # Brand assets and graphics
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glass navbar + mobile drawer + theme switcher
│   │   ├── Footer.jsx          # Multi-column footer & copyright
│   │   ├── Button.jsx          # Variant button system (glow, primary, secondary, outline)
│   │   ├── SectionHeading.jsx  # Animated section header component
│   │   ├── Hero.jsx            # Dynamic Hero with animated AI core sphere
│   │   ├── Stats.jsx           # Centralized stats counters
│   │   ├── ServiceCard.jsx     # Card for 8 engineering services
│   │   ├── SolutionCard.jsx    # Card for sector solutions
│   │   ├── TechnologyCard.jsx  # Tech categories & skill chips
│   │   ├── IndustryCard.jsx    # Vertical industry cards
│   │   ├── ProjectCard.jsx     # Portfolio cards linking to dynamic case studies
│   │   ├── CaseStudyHero.jsx   # Case study hero with system metrics
│   │   ├── CaseStudySection.jsx# Deep architectural breakdowns & user journeys
│   │   ├── CTASection.jsx      # High-conversion banner
│   │   ├── ContactForm.jsx     # Project proposal inquiry form with validation
│   │   ├── CareerCard.jsx      # Job card with interactive application modal
│   │   ├── Toast.jsx           # Toast notification banner
│   │   ├── Loading.jsx         # Loading spinner & skeleton placeholders
│   │   └── ErrorBoundary.jsx   # Graceful runtime error boundary
│   ├── pages/                  # 13+ route views
│   ├── data/                   # Centralized datasets
│   │   ├── projects.js         # 5 complete project architectures
│   │   ├── services.js         # 8 engineering services
│   │   ├── solutions.js        # 8 domain solutions
│   │   ├── technologies.js     # Tech stack categorization
│   │   ├── industries.js       # 11 industry verticals
│   │   └── careers.js          # 8 open job openings
│   ├── services/               # Mock & API client services
│   │   ├── contactService.js   # Inquiry handler (localStorage -> live API)
│   │   └── careerService.js    # Job application handler (localStorage -> live API)
│   ├── hooks/
│   │   ├── useScroll.js        # Sticky navbar scroll listener
│   │   ├── useTheme.jsx        # Dark/Light mode theme state
│   │   ├── useToast.jsx        # Global toast notifications
│   │   └── useSEO.js           # Dynamic document title & meta tags
│   ├── utils/
│   │   ├── validation.js       # Form validation rules
│   │   └── helpers.js          # Text formatters and smooth scrollers
│   ├── styles/                 # Modular CSS architecture
│   ├── App.jsx                 # Router & provider setup
│   └── main.jsx                # Application root entry
├── .env.example
├── .gitignore
├── package.json
└── index.html
```

---

## 🛠️ Customization & Editing Guide

### 1. Updating Company Information
- Edit `src/data/services.js` to modify services, descriptions, or benefits.
- Edit `src/data/solutions.js` to update domain-specific solution features.
- Edit `src/data/technologies.js` to adjust tech stack chips and categories.
- Edit `src/data/industries.js` to add new industry verticals.
- Edit `src/data/careers.js` to add or update job openings.

### 2. Updating Case Studies
- Edit `src/data/projects.js` to modify or add case studies. Each entry automatically generates its own dynamic case study page at `/portfolio/:slug`.

### 3. Connecting to Future Backend APIs
- In `.env` (or environment configuration), specify:
  ```env
  VITE_CONTACT_API_URL=https://api.yourdomain.com/api/contact/
  VITE_CAREER_API_URL=https://api.yourdomain.com/api/careers/
  ```
- The handlers in `src/services/contactService.js` and `src/services/careerService.js` are already programmed to automatically send `POST` requests to these endpoints when configured, with seamless fallback to `localStorage` in demo mode.

---

## 📄 License
© 2026 AIOIN. All rights reserved.
