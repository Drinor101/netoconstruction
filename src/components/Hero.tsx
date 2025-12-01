import { ChevronDown, ArrowRight } from 'lucide-react';
import heroVideo from '../assets/01.Kompleksi-Parku-Animacion.mp4';

export default function Hero() {
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
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-screen py-16 sm:py-20">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] tracking-tight">
                <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                  Excellence
                </span>
                <span className="block text-white mt-2">Since 1998</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-2xl leading-relaxed font-normal">
                Projektet tona janë të ndërtuara me standardet më të larta, duke u fokusuar në arkitekturë moderne, efikasitet energjie dhe lokacione strategjike.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="group inline-flex items-center justify-center bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl w-full sm:w-auto"
              >
                Shiko Projektet
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 pt-6 sm:pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1">500+</div>
                <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Projekte</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1">25+</div>
                <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Vite Përvojë</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-1">98%</div>
                <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Kënaqësi</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-amber-400/20 rounded-3xl blur-2xl animate-float"></div>
              <div className="relative bg-gradient-to-br from-amber-900/60 via-amber-800/50 to-amber-900/60 backdrop-blur-xl rounded-3xl p-8 border border-amber-700/30 shadow-luxury">
                <div className="space-y-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base sm:text-lg font-bold uppercase tracking-wider">KOMPLEKSI PARKU</span>
                    <span className="text-2xl sm:text-3xl font-bold text-amber-400">2024</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-4"></div>
                  <p className="text-sm sm:text-base leading-relaxed text-white/95">
                    Çdo projekt është menduar për të ofruar jo vetëm një shtëpi, por një investim afatgjatë që rrit vlerën me kalimin e kohës.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-xs text-white/60 uppercase tracking-wider hidden sm:block">Scroll</span>
            <ChevronDown size={20} className="text-white/60 sm:hidden" />
            <ChevronDown size={24} className="text-white/60 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
