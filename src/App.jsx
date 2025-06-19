import React from 'react';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import TechnologiesPage from './Pages/TechnologiesPage';

function App() {
  return (
    <div className="bg-darkbg text-neon min-h-screen">
      <Header />
      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Gradient BG Overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: 'linear-gradient(90deg, #18181b 60%, rgba(57,255,20,0.12) 100%)'
    }}
  />
  <div className="relative z-10 w-full">
    <Home />
  </div>
</section>

        <section id="about" className="py-20 flex flex-col items-center justify-center">
          <About />
        </section>
        <section id="technologies" className="py-20 flex items-center justify-center">
          <TechnologiesPage />
        </section>
        <section id="projects" className="py-20 flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="py-20 flex items-center justify-center">
          <Contact />
        </section>
        
      </main>
      <Footer/>
    </div>
  );
}

export default App;
