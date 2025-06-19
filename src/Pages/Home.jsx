import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import homeImage from '../assets/nadun.jpeg'; 
import ContactFloatingButton from '../Components/ContactFloatingButton';
import Typewriter from '../Components/TypeWriter';
import cvPdf from '../assets/Nadun Sooriyaarachchi Updated.pdf'; 
import { FaJsSquare, FaPython, FaJava, FaNodeJs, FaReact, FaGitAlt } from 'react-icons/fa';// Import the PDF file

const textVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const particleOptions = {
  fullScreen: { enable: false },
  background: { color: "#18181b" },
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#39FF14" },
    shape: { type: "circle" },
    opacity: { value: 0.2, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1, direction: "none", out_mode: "out" },
    links: {
      enable: true,
      distance: 120,
      color: "#39FF14",
      opacity: 0.2,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden" id="home">
      {/* Particle Animation Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0 w-full h-full z-0"
        />
      )}
      <ContactFloatingButton />
      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center container mx-auto px-4 py-8 md:py-20 gap-8 md:gap-12">
          {/* Text Section with animation */}
          <motion.section
            className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl px-4 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={textVariants}
          >
            <div>
              <p className="text-sm tracking-widest text-white/70 mb-2">HELLO, I AM</p>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">NADUN SOORIYAARCHCHI</h1>
              <h2 className="text-lg md:text-2xl font-semibold text-neon mb-4">I AM <Typewriter/></h2>
              <p className="text-base md:text-lg text-white/80 mb-6 max-w-md mx-auto md:mx-0">
                From Sri Lanka. I&apos;m an undergraduate and versatile developer skilled in web, mobile, full stack, software engineering, and data science. I&apos;m passionate about building reliable digital solutions and love turning unique ideas into reality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
              <a
                href={cvPdf}
                download="Nadun_Sooriyaarachchi_CV.pdf"
                className="bg-neon text-darkbg font-semibold py-2 px-6 rounded-full shadow hover:bg-neon/80 transition"
              >
                Download CV
              </a>
              <button
                onClick={scrollToContact}
                className="bg-transparent border-2 border-neon text-neon font-semibold py-2 px-6 rounded-full shadow hover:bg-neon hover:text-darkbg transition"
              >
                Contact
              </button>
            </div>
          </motion.section>
          
          {/* Image Section with animation */}
          <motion.section
  className="w-full md:w-auto flex justify-center items-center mb-10 md:mb-0 relative"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.1 }}
  variants={imageVariants}
>
  <div className="relative flex items-center justify-center">
    {/* Neon border */}
    <div className="w-60 h-60 md:w-96 md:h-96 rounded-full border-4 border-neon flex items-center justify-center">
      {/* Gap and image */}
      <div className="w-56 h-56 md:w-[22rem] md:h-[22rem] bg-darkbg rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={homeImage}
          alt="Nadun"
          className="w-full h-full object-cover rounded-full"
          style={{ objectPosition: 'top center' }}
        />
      </div>
    </div>
  </div>
</motion.section>

        </main>
      </div>
    </div>
  );
};

export default Home;
