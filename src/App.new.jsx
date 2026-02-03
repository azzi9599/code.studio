import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#0f2c2a]">
      <header className="px-6 py-6 md:px-20">
        <nav className="rounded-[999px] bg-white/90 px-6 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="font-semibold tracking-[0.2em] text-[#0a1f1d]">
              CO-DE.STUDIO
            </Link>
            <div className="hidden gap-6 text-sm uppercase tracking-[0.2em] text-[#4f7975] md:flex">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="hover:text-[#0f2c2a]">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="relative md:hidden">
              <button
                type="button"
                className="flex flex-col rounded-full p-2 text-[#0f2c2a] hover:bg-white/50"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
              >
                <span className="block h-0.5 w-6 bg-[#0f2c2a]" />
                <span className="mt-1 block h-0.5 w-6 bg-[#0f2c2a]" />
                <span className="mt-1 block h-0.5 w-6 bg-[#0f2c2a]" />
              </button>
            </div>
          </div>
        </nav>
        <div
          className={`fixed right-0 top-0 z-40 flex h-full w-[60vw] min-w-[240px] max-w-md flex-col bg-white/95 p-8 text-sm uppercase tracking-[0.2em] text-[#4f7975] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] transform md:hidden ${
            menuOpen ? 'pointer-events-auto opacity-100 translate-x-0' : 'pointer-events-none opacity-0 translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/20 pb-4">
            <span className="text-xs tracking-[0.4em] text-[#0f2c2a]">Menu</span>
            <button
              type="button"
              aria-label="Close navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#0f2c2a] hover:bg-[#f3fbfa]"
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-[#0f2c2a]" />
                <span className="absolute left-1/2 top-1/2 block h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-[#0f2c2a]" />
              </span>
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="block rounded-2xl px-4 py-3 hover:bg-[#e1f3f1] hover:text-[#0f2c2a]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;







