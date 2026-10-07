import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Loading } from './components/Loading';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './hooks/useTheme';
import { ToastProvider } from './hooks/useToast';

// Lazy Loaded Pages for Performance & Optimal Chunking
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Solutions = lazy(() => import('./pages/Solutions').then(m => ({ default: m.Solutions })));
const Technologies = lazy(() => import('./pages/Technologies').then(m => ({ default: m.Technologies })));
const Industries = lazy(() => import('./pages/Industries').then(m => ({ default: m.Industries })));
const Portfolio = lazy(() => import('./pages/Portfolio').then(m => ({ default: m.Portfolio })));
const CaseStudy = lazy(() => import('./pages/CaseStudy').then(m => ({ default: m.CaseStudy })));
const Careers = lazy(() => import('./pages/Careers').then(m => ({ default: m.Careers })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Styles
import './styles/variables.css';
import './styles/globals.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/cards.css';
import './styles/forms.css';
import './styles/footer.css';
import './styles/animations.css';
import './styles/responsive.css';

// ScrollToTop on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ToastProvider>
          <Router>
            <ScrollToTop />
            <div className="app-layout">
              <Navbar />
              <main className="main-content">
                <Suspense fallback={<Loading message="Loading AIOIN platform..." />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:slug" element={<CaseStudy />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <Toast />
            </div>
          </Router>
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
