import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#8dd8cf]/30 bg-white/50 px-4 sm:px-6 py-8 sm:py-12 md:px-20">
      <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-1">
          <Link to="/" className="inline-flex items-center pt-2 sm:pt-3">
            <img
              src={logo}
              alt="CO-DE.STUDIO"
              className="h-6 w-auto sm:h-7 md:h-8 object-contain"
            />
          </Link>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#4f7975]">Navigation</h4>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-[#1c4a46]">
            <Link to="/about" className="hover:text-[#45818E] transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-[#45818E] transition-colors">
              Projects
            </Link>
            <Link to="/blogs" className="hover:text-[#45818E] transition-colors">
              Blogs
            </Link>
            <Link to="/careers" className="hover:text-[#45818E] transition-colors">
              Media
            </Link>
            <Link to="/contact" className="hover:text-[#45818E] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#4f7975]">Follow</h4>
          <div className="flex gap-3 text-[#1c4a46]">
            <a href="https://www.instagram.com/co_de.studio/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:opacity-80 transition-opacity" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/company/co-de-studio/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 border-t border-[#8dd8cf]/30 pt-6 sm:pt-8 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#4f7975]">
          © {currentYear} co-de.studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

