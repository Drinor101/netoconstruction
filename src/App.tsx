import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import CompanyInfo from './components/CompanyInfo';
import Contact from './components/Contact';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <CompanyInfo />
      <Contact />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
