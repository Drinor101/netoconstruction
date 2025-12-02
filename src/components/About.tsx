import { Award, Shield, Users, TrendingUp } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Card from './Card';
import aboutImage from '../assets/optimized/NDERTESA ANASH1.webp';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Award-winning construction company with ISO 9001:2015 certification',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every project undergoes rigorous quality control and safety inspections',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '200+ certified professionals including engineers, architects, and craftsmen',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '$500M+ in successful project delivery across residential and commercial sectors',
    },
  ];

  return (
    <Section id="about" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-32">
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Rreth Nesh</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Ekselencë në
              <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Ndërtim
              </span>
            </h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>
              NETO CONSTRUCTION ka qenë në krye të inovacionit në ndërtim për më shumë se dy dekada. 
              Angazhimi ynë për cilësi, qëndrueshmëri dhe kënaqësia e klientit na ka bërë zgjedhjen 
              e preferuar për projektet premium rezidenciale dhe komerciale.
            </p>
            <p>
              Projektet tona janë të ndërtuara me standardet më të larta, duke u fokusuar në arkitekturë 
              moderne, efikasitet energjie dhe lokacione strategjike.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
            <div className="bg-gradient-to-br from-slate-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Projekte të Përfunduara</div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">25+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Vite Përvojë</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="relative group">
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-amber-400/30 via-amber-500/20 to-amber-400/30 rounded-2xl sm:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-luxury">
              <img
                src={aboutImage}
                alt="Construction project"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
              <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-luxury border border-white/20">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1">25+</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Vite Ekselencë</p>
                  </div>
                  <div className="h-12 sm:h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-bold text-amber-600 mb-1">98%</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">Kënaqësi Klientësh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="group bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center shadow-medium hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-gold">
                <Icon className="text-amber-600" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-amber-600 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
