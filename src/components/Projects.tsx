import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

// Helper function to get asset URL
const getAssetUrl = (path: string) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: 'Kompleksi Parku Animacion',
      category: 'Residential',
      image: getAssetUrl('ND.2.jpg'),
      description: 'Modern residential complex with beautiful park surroundings',
    },
    {
      title: 'Rina Development',
      category: 'Residential',
      image: getAssetUrl('RINA1.jpg'),
      description: 'Luxury residential development with premium amenities',
    },
    {
      title: 'Construction Project',
      category: 'Commercial',
      image: getAssetUrl('ndertesa21.jpg'),
      description: 'State-of-the-art commercial building with modern design',
    },
    {
      title: 'Residential Complex',
      category: 'Residential',
      image: getAssetUrl('ND.3.jpg'),
      description: 'Elegant residential complex with contemporary architecture',
    },
    {
      title: 'Modern Development',
      category: 'Mixed-Use',
      image: getAssetUrl('ndertesa22.jpg'),
      description: 'Mixed-use development combining residential and commercial spaces',
    },
    {
      title: 'Rina Project Phase 2',
      category: 'Residential',
      image: getAssetUrl('RINA2.jpg'),
      description: 'Second phase of luxury residential development',
    },
    {
      title: 'Construction Site',
      category: 'Commercial',
      image: getAssetUrl('ndertesa23.jpg'),
      description: 'Large-scale commercial construction project',
    },
    {
      title: 'Residential Building',
      category: 'Residential',
      image: getAssetUrl('ND.4.jpg'),
      description: 'Modern residential building with premium finishes',
    },
    {
      title: 'Development Project',
      category: 'Mixed-Use',
      image: getAssetUrl('ndertesa24.jpg'),
      description: 'Comprehensive development project with multiple facilities',
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Section id="projects" background="gray">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Projektet
              <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Tona
              </span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Eksploroni portofolin tonë të projekteve të shquara që tregojnë angazhimin tonë për ekselencë dhe inovacion.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-medium cursor-pointer transition-all duration-700 hover:shadow-luxury transform hover:-translate-y-3"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-slate-900 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.category}
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center text-amber-600 font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Shiko më shumë
                <ChevronRight className="ml-2" size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in overflow-y-auto"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="fixed sm:absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8 text-white hover:text-amber-400 transition-colors z-10 p-2 rounded-lg hover:bg-white/10 bg-black/50 sm:bg-transparent"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="fixed sm:absolute left-2 sm:left-4 lg:left-8 bottom-2 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 p-2 sm:p-3 rounded-lg hover:bg-white/10 backdrop-blur-sm bg-black/50 sm:bg-transparent"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="fixed sm:absolute right-2 sm:right-4 lg:right-8 bottom-2 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 text-white hover:text-amber-400 transition-colors z-10 p-2 sm:p-3 rounded-lg hover:bg-white/10 backdrop-blur-sm bg-black/50 sm:bg-transparent"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div 
            className="max-w-6xl w-full animate-scale-in my-12 sm:my-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[currentImage].image}
              alt={projects[currentImage].title}
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl"
            />
            <div className="text-center text-white mt-4 sm:mt-6 lg:mt-8 px-4">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-600 rounded-lg text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg">
                {projects[currentImage].category}
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3">{projects[currentImage].title}</h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">{projects[currentImage].description}</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">
                {currentImage + 1} / {projects.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
