import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Thoughts from './components/Thoughts';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const elementsToReveal = document.querySelectorAll(
      '.section-header, .glass-card, .hero-content, .hero-image-container, .education-item, .contact-info, .contact-form, .about-text'
    );
    
    elementsToReveal.forEach((el) => {
      el.classList.add('reveal-item');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParticlesBackground />
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
