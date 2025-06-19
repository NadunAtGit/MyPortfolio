import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaLaptopCode, FaMobileAlt, FaBrain, FaTools } from 'react-icons/fa';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hiddenRight: { opacity: 0, x: 60 },
  hiddenBottom: { opacity: 0, y: 40 },
  showBottom: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const About = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* About Me Heading */}
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-neon"
        initial="hiddenBottom"
        whileInView="showBottom"
        viewport={{ once: false, amount: 0.5 }}
        variants={cardVariants}
      >
        About Me
      </motion.h2>

      {/* Self-Introduction Passage */}
      <motion.div
        className="mb-8 bg-darkbg/90 border-l-4 border-neon pl-6 py-4 rounded shadow-lg"
        initial="hiddenBottom"
        whileInView="showBottom"
        viewport={{ once: false, amount: 0.5 }}
        variants={cardVariants}
      >
        <p className="text-lg md:text-xl text-white/90 italic">
          "I&apos;m Nadun Sooriyaarchchi, a passionate and driven technologist who thrives on turning ideas into impactful digital solutions. My journey in tech is fueled by curiosity, creativity, and a relentless desire to learn and grow."
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Academic Standing Card (from left) */}
        <motion.div
          className="bg-darkbg/80 rounded-xl shadow-lg p-6 flex items-center gap-4 border border-neon/30"
          initial="hiddenLeft"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          variants={cardVariants}
        >
          <div className="text-neon text-4xl">
            <FaGraduationCap />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-neon mb-1">Academic Standing</h3>
            <p className="text-white/90">3rd Year Undergraduate</p>
            <p className="text-white/70">BSc (Hons) in IT</p>
            <p className="text-neon font-semibold mt-1">GPA: 3.4</p>
          </div>
        </motion.div>
        {/* Education Card (from right) */}
        <motion.div
          className="bg-darkbg/80 rounded-xl shadow-lg p-6 flex items-center gap-4 border border-neon/30"
          initial="hiddenRight"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          variants={cardVariants}
        >
          <div className="text-neon text-4xl">
            <FaUniversity />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-neon mb-1">Education</h3>
            <p className="text-white/90">Department of Industrial Management</p>
            <p className="text-white/70">Faculty of Science</p>
            <p className="text-white/70">University of Kelaniya</p>
          </div>
        </motion.div>
      </div>

      {/* Passionate Areas (from bottom) */}
      <motion.div
        className="mt-10 bg-darkbg/80 rounded-xl shadow-lg p-6 border border-neon/30"
        initial="hiddenBottom"
        whileInView="showBottom"
        viewport={{ once: false, amount: 0.4 }}
        variants={cardVariants}
      >
        <h3 className="text-xl font-semibold text-neon mb-4 flex items-center gap-2">
          <FaBrain className="text-2xl" /> Passionate Areas
        </h3>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <div className="flex items-center gap-2 text-white/90">
            <FaLaptopCode className="text-neon" /> Web Development
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <FaMobileAlt className="text-neon" /> Mobile Development
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <FaBrain className="text-neon" /> Data Science & ML
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <FaTools className="text-neon" /> Low Code Development
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
