import Section from './Section';
import SectionTitle from './SectionTitle';

export default function CompanyInfo() {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Filosofia Jonë</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Standardet
              <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Më të Larta
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Projektet tona janë të ndërtuara me standardet më të larta, duke u fokusuar në arkitekturë moderne, 
              efikasitet energjie dhe lokacione strategjike. Çdo projekt është menduar për të ofruar jo vetëm 
              një shtëpi, por një investim afatgjatë që rrit vlerën me kalimin e kohës.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-2xl sm:rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-luxury border border-amber-500/20">
              <div className="text-center space-y-4 sm:space-y-6">
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-2">
                    NETO CONSTRUCTION
                  </p>
                  <p className="text-lg sm:text-xl text-amber-400 font-semibold">2025</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
                <div className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
                  <p>049/974/973 • 048/430/001</p>
                  <p className="break-all">Netoconstructionshpk@gmail.com</p>
                  <p className="text-gray-400">Rr.Manchester nr.40<br />Afër Parkut të Manchesterit,<br />te Parku i Pishave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

