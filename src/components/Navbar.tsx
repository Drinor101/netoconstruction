import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/LLOGO.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset për navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/99 backdrop-blur-xl shadow-luxury py-4 border-b border-gray-200' 
          : 'bg-black/50 backdrop-blur-md py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between relative">
          <a 
            href="#hero" 
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <img 
              src={logo} 
              alt="NETO CONSTRUCTION Logo" 
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 hidden sm:block ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">NETO</span>
              <span className={isScrolled ? 'text-black' : 'text-white'}> CONSTRUCTION</span>
            </div>
          </a>
          
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-base font-bold tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">NETO</span>
            <span className={isScrolled ? 'text-black' : 'text-white'}> CONSTRUCTION</span>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative font-semibold text-sm lg:text-base px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isScrolled
                    ? 'text-black hover:bg-black/10'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-black' : 'bg-white'
                }`}></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className={`ml-4 px-6 py-2.5 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-black text-white hover:bg-black/90'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              Kontakto
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-black hover:bg-black/10' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="md:hidden mt-4 py-6 bg-white rounded-2xl shadow-luxury animate-fade-in-down border border-gray-200 relative z-50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block py-4 px-6 text-black hover:bg-black/10 transition-all duration-300 font-semibold text-base border-b border-gray-200 last:border-b-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4 pb-2">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="block w-full text-center bg-black text-white hover:bg-black/90 px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Kontakto
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
