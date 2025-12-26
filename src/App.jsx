import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './App.css';

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.reveal');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="app">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Resume /></div>
        <div className="reveal"><Education /></div>
        <div className="reveal"><Experience /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
