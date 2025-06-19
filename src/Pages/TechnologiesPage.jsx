import React from 'react';
import { motion } from 'framer-motion';


const techCategories = [
  {
    category: 'Programming Languages',
    technologies: [
      { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C#', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    technologies: [
      { name: 'ReactJS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'NextJS', url: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg' },
      { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Node/Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Spring Boot', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'ASP .NET Core', url: 'https://w7.pngwing.com/pngs/673/239/png-transparent-entity-framework-core-asp-net-core-net-framework-microsoft-blue-text-logo-thumbnail.png' },
      { name: 'TailwindCSS', url: 'https://flowbite.com/docs/images/logo.svg' },
    ],
  },
  {
    category: 'Databases',
    technologies: [
      { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    category: 'Tools & Platforms',
    technologies: [
      { name: 'Github', url: 'https://a.slack-edge.com/80588/img/plugins/github/service_512.png' },
      { name: 'Figma', url: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-1024.png' },
      { name: 'Postman', url: 'https://images.seeklogo.com/logo-png/44/1/postman-api-platform-logo-png_seeklogo-446859.png' },
      { name: 'Salesforce', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
    ],
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const TechnologiesPage = () => (
  <div className="min-h-screen bg-darkbg text-neon py-12 px-4 flex flex-col items-center">
    <h1 className="text-4xl font-bold mb-8 text-center text-neon drop-shadow-neon">
      Technologies &amp; Tools
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {techCategories.map((cat, idx) => (
        <motion.div
          key={cat.category}
          className="bg-darkbg/80 border border-neon/30 rounded-2xl p-6 shadow-lg hover:shadow-neon transition-all duration-300 flex flex-col items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold mb-4 text-neon tracking-wide">{cat.category}</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {cat.technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center w-24">
                {tech.url ? (
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="h-12 w-12 mb-2 drop-shadow-neon"
                    style={{ filter: 'drop-shadow(0 0 8px #39FF14)' }}
                  />
                ) : (
                  <span className="text-3xl mb-2">{tech.icon}</span>
                )}
                <span className="text-sm text-white text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default TechnologiesPage;
