import { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import logo from './logo.png';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Media' },
  { to: '/contact', label: 'Contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#0f2c2a]">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-white px-4 py-4 sm:px-6 sm:py-5 md:px-20">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="CO-DE.STUDIO"
                className="h-6 w-auto sm:h-7 md:h-8 object-contain"
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm uppercase tracking-[0.2em] text-[#45818E]">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="hover:text-[#45818E] transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-full text-[#0f2c2a] hover:bg-white/50 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className={`block h-0.5 w-6 bg-[#0f2c2a] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-[#0f2c2a] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 bg-[#0f2c2a] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-8 pt-20">
            <nav className="flex flex-col gap-6 text-lg uppercase tracking-[0.2em] text-[#45818E]">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-[#45818E] transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pb-24 pt-16 sm:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#0f2c2a] text-white shadow-lg hover:bg-[#1c4a46] transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;

