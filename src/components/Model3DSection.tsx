import Section from './Section';
import SectionTitle from './SectionTitle';
import ModelViewer3D from './ModelViewer3D';

export default function Model3DSection() {
  return (
    <Section background="white">
      <div className="mb-16 lg:mb-20">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">3D Preview</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Eksperiencë
            <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              3D Interaktive
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Eksploroni projektet tona në 3D. Rrotulloni dhe shqyrtoni çdo detaj të hapësirës tuaj të ardhshme.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <ModelViewer3D />
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-medium hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-3">500+</h3>
            <p className="text-gray-600 text-base lg:text-lg font-medium">Projekte të Përfunduara</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-medium hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-3">25+</h3>
            <p className="text-gray-600 text-base lg:text-lg font-medium">Vite Ekselencë</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-medium hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-3">98%</h3>
            <p className="text-gray-600 text-base lg:text-lg font-medium">Kënaqësi Klientësh</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
