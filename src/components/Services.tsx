import { Building2, Hammer, Home, Landmark, PenTool, Wrench } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Card from './Card';

// Helper function to get asset URL
const getAssetUrl = (path: string) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'State-of-the-art office buildings, retail spaces, and mixed-use developments tailored to your business needs.',
      image: getAssetUrl('ndertesa25.jpg'),
    },
    {
      icon: Home,
      title: 'Residential Development',
      description: 'Luxury homes, condominiums, and apartment complexes designed for modern living with sustainable practices.',
      image: getAssetUrl('ND.5.jpg'),
    },
    {
      icon: PenTool,
      title: 'Architecture & Design',
      description: 'Innovative architectural solutions combining aesthetics, functionality, and environmental consciousness.',
      image: getAssetUrl('ND.6.jpg'),
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation services, preserving character while modernizing amenities.',
      image: getAssetUrl('ndertesa26.jpg'),
    },
    {
      icon: Landmark,
      title: 'Real Estate Development',
      description: 'Full-service development from land acquisition to project completion, maximizing investment potential.',
      image: getAssetUrl('ND.7.jpg'),
    },
    {
      icon: Wrench,
      title: 'Project Management',
      description: 'Comprehensive oversight ensuring on-time, on-budget delivery with transparent communication throughout.',
      image: getAssetUrl('ndertesa27.jpg'),
    },
  ];

  return (
    <Section id="services" background="white">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Shërbimet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Shërbimet
              <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Tona
              </span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Zgjidhje gjithëpërfshirëse ndërtimi dhe zhvillimi të personalizuara për të tejkaluar pritjet tuaja.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-luxury transition-all duration-700 transform hover:-translate-y-2">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
