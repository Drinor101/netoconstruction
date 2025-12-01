import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact" background="white">
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <div className="space-y-3 sm:space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-50 rounded-full">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full"></div>
            <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Kontakti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Kontakto
            <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Me Ne
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Gati për të filluar projektin tuaj të ardhshëm? Na kontaktoni sot për një konsultim falas.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl shadow-luxury p-6 sm:p-8 lg:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Informacioni i Kontaktit</h3>

            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Phone className="text-amber-600" size={20} />
                </div>
                <div className="ml-4 sm:ml-5">
                  <h4 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Telefon</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-1">049/974/973</p>
                  <p className="text-sm sm:text-base text-gray-600">048/430/001</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <Mail className="text-amber-600" size={20} />
                </div>
                <div className="ml-4 sm:ml-5">
                  <h4 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Email</h4>
                  <p className="text-sm sm:text-base text-gray-600 break-all">Netoconstructionshpk@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <MapPin className="text-amber-600" size={20} />
                </div>
                <div className="ml-4 sm:ml-5">
                  <h4 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Adresa</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-1">Rr.Manchester nr.40</p>
                  <p className="text-sm sm:text-base text-gray-600 mb-1">Afër Parkut të Manchesterit,</p>
                  <p className="text-sm sm:text-base text-gray-600">te Parku i Pishave</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-slate-900 mb-4 sm:mb-5 text-base sm:text-lg">Orët e Punës</h4>
              <div className="space-y-2 sm:space-y-3 text-gray-600">
                <p className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                  <span className="text-sm sm:text-base">E Hënë - E Premte:</span>
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">8:00 - 18:00</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                  <span className="text-sm sm:text-base">E Shtunë:</span>
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">9:00 - 16:00</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1">
                  <span className="text-sm sm:text-base">E Dielë:</span>
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">E Mbyllur</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/35549974973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contact via WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-large overflow-hidden h-64 sm:h-72 lg:h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316d2e5f7d%3A0x4b0a9c17e4c8e8dd!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl shadow-luxury p-6 sm:p-8 lg:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Dërgo Mesazh</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Emri i Plotë *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Emri juaj"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="049/974/973"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Lloji i Projektit *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-sm sm:text-base bg-white"
                >
                  <option value="">Zgjidhni llojin e projektit</option>
                  <option value="residential">Ndërtim Rezidencial</option>
                  <option value="commercial">Zhvillim Komercial</option>
                  <option value="renovation">Rinovim & Rindërtim</option>
                  <option value="architecture">Arkitekturë & Dizajn</option>
                  <option value="real-estate">Zhvillim Pasurish</option>
                  <option value="other">Tjetër</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Detajet e Projektit *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Na tregoni për projektin tuaj..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base py-3 sm:py-4">
                <Send size={18} className="mr-2" />
                Dërgo Mesazh
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
