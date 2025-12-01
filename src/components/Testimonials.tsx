import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechVision Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Elite Build transformed our vision into reality. Their attention to detail and commitment to excellence exceeded all expectations. Our new headquarters is a masterpiece.',
      rating: 5,
      project: 'TechVision Headquarters',
    },
    {
      name: 'Michael Chen',
      role: 'Property Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with Elite Build was seamless from start to finish. Their professionalism, expertise, and ability to deliver on time and within budget is unmatched in the industry.',
      rating: 5,
      project: 'Riverside Luxury Condos',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Our dream home became a reality thanks to Elite Build. They listened to every detail and created a space that perfectly reflects our lifestyle. Absolutely phenomenal work.',
      rating: 5,
      project: 'Custom Waterfront Villa',
    },
    {
      name: 'David Thompson',
      role: 'Retail Chain Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Elite Build handled our multi-location expansion with incredible efficiency. Their project management skills and quality of work have been instrumental to our growth.',
      rating: 5,
      project: 'Retail Expansion Project',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section background="dark">
      <SectionTitle
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from those who've experienced our excellence firsthand"
        light
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <Quote className="absolute top-8 lg:top-12 left-8 lg:left-12 text-amber-200/20" size={80} />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 lg:mb-10 gap-4">
              <div className="relative">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-amber-500 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-1">{currentTestimonial.name}</h3>
                <p className="text-gray-600 text-sm lg:text-base mb-3">{currentTestimonial.role}</p>
                <div className="flex gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed mb-8 lg:mb-10 italic font-light">
              "{currentTestimonial.text}"
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
              <p className="text-sm lg:text-base text-gray-600">
                Project: <span className="font-semibold text-amber-600">{currentTestimonial.project}</span>
              </p>
              <p className="text-sm text-gray-400 font-medium">
                {currentIndex + 1} / {testimonials.length}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:mt-10 gap-4">
          <button
            onClick={prevTestimonial}
            className="bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-amber-500 rounded-full p-3 lg:p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white/10 backdrop-blur-sm hover:bg-white text-white hover:text-amber-500 rounded-full p-3 lg:p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-amber-500 w-8' : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
