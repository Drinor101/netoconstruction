import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">NETO</span>
                <span className="text-white"> CONSTRUCTION</span>
              </h3>
              <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"></div>
            </div>
            <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm lg:text-base">
              Projektet tona janë të ndërtuara me standardet më të larta, duke u fokusuar në arkitekturë moderne, efikasitet energjie dhe lokacione strategjike.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-amber-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-amber-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-amber-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 hover:bg-amber-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-5 lg:mb-6 text-white">Lidhje të Shpejta</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base inline-block hover:translate-x-1 transform transition-transform">
                  Rreth Nesh
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base inline-block hover:translate-x-1 transform transition-transform">
                  Shërbimet
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base inline-block hover:translate-x-1 transform transition-transform">
                  Projektet
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm lg:text-base inline-block hover:translate-x-1 transform transition-transform">
                  Kontakti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-5 lg:mb-6 text-white">Shërbimet</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-400 text-sm lg:text-base">Ndërtim Komercial</li>
              <li className="text-gray-400 text-sm lg:text-base">Zhvillim Rezidencial</li>
              <li className="text-gray-400 text-sm lg:text-base">Arkitekturë & Dizajn</li>
              <li className="text-gray-400 text-sm lg:text-base">Rinovim & Rindërtim</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-5 lg:mb-6 text-white">Kontakti</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start text-gray-400 group">
                <MapPin size={18} className="mr-2 sm:mr-3 mt-0.5 flex-shrink-0 text-amber-400 group-hover:text-amber-500 transition-colors" />
                <span className="text-xs sm:text-sm lg:text-base leading-relaxed">
                  Rr.Manchester nr.40<br />
                  Afër Parkut të Manchesterit,<br />
                  te Parku i Pishave
                </span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <Phone size={18} className="mr-2 sm:mr-3 flex-shrink-0 text-amber-400 group-hover:text-amber-500 transition-colors" />
                <div>
                  <span className="text-xs sm:text-sm lg:text-base block">049/974/973</span>
                  <span className="text-xs sm:text-sm lg:text-base">048/430/001</span>
                </div>
              </li>
              <li className="flex items-start text-gray-400 group">
                <Mail size={18} className="mr-2 sm:mr-3 mt-0.5 flex-shrink-0 text-amber-400 group-hover:text-amber-500 transition-colors" />
                <span className="text-xs sm:text-sm lg:text-base break-all">Netoconstructionshpk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 lg:pt-10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base text-center md:text-left">
            &copy; {new Date().getFullYear()} NETO CONSTRUCTION. Të gjitha të drejtat e rezervuara.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm lg:text-base">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Politika e Privatësisë
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Kushtet e Shërbimit
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
              Harta e Faqes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
