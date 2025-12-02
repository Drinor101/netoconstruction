import Section from './Section';
import SectionTitle from './SectionTitle';

export default function Sponsors() {
  const sponsors = [
    {
      name: 'Alori Reklama',
      image: '/assets/aloriReklama.png',
    },
    {
      name: 'AXHUSTATOR ENISI',
      image: '/assets/axhustatorenisi.png',
    },
    {
      name: 'E-BAAU',
      image: '/assets/ebaau.png',
    },
    {
      name: 'ELONI COMMERCE',
      image: '/assets/elonicommerce.png',
    },
    {
      name: 'EP GJEOMETRI',
      image: '/assets/epgjeometri.png',
    },
    {
      name: 'GAZI LED',
      image: '/assets/gaziled.png',
    },
    {
      name: 'RELUX',
      image: '/assets/relux.png',
    },
    {
      name: 'STATIKA',
      image: '/assets/statika.png',
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
          <div
            key={index}
            className="group bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-200 hover:border-amber-500 transition-all duration-500 shadow-medium hover:shadow-luxury transform hover:-translate-y-2 flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]"
          >
            <div className="text-center w-full">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-auto max-h-[80px] sm:max-h-[100px] lg:max-h-[120px] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

