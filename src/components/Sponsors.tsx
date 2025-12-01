import Section from './Section';
import SectionTitle from './SectionTitle';
import { getCloudinaryPdfUrl } from '../config/cloudinary';

export default function Sponsors() {
  const sponsors = [
    {
      name: 'Alori Reklama',
      pdf: getCloudinaryPdfUrl('Alori Reklama.pdf'),
    },
    {
      name: 'AXHUSTATOR ENISI',
      pdf: getCloudinaryPdfUrl('AXHUSTATOR ENISI.pdf'),
    },
    {
      name: 'E-BAAU',
      pdf: getCloudinaryPdfUrl('E-BAAU.pdf'),
    },
    {
      name: 'ELONI COMMERCE',
      pdf: getCloudinaryPdfUrl('ELONI COMMERCE.pdf'),
    },
    {
      name: 'EP GJEOMETRI',
      pdf: getCloudinaryPdfUrl('EP GJEOMETRI.pdf'),
    },
    {
      name: 'GAZI LED',
      pdf: getCloudinaryPdfUrl('GAZI LED.pdf'),
    },
    {
      name: 'RELUX',
      pdf: getCloudinaryPdfUrl('RELUX.pdf'),
    },
    {
      name: 'STATIKA',
      pdf: getCloudinaryPdfUrl('STATIKA.pdf'),
    },
  ];

  return (
    <Section background="gray">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <div className="space-y-3 sm:space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 rounded-full">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
            <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Partnerët</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Partnerët
            <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              & Sponsorët
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Punojmë me partnerë dhe sponsorë të besuar që ndajnë angazhimin tonë për ekselencë dhe cilësi.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {sponsors.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200 hover:border-amber-500 transition-all duration-500 shadow-medium hover:shadow-luxury transform hover:-translate-y-2 flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]"
          >
            <div className="text-center">
              <p className="text-xs sm:text-sm lg:text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
                {sponsor.name}
              </p>
              <div className="mt-2 sm:mt-3 h-0.5 w-0 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300 mx-auto"></div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

