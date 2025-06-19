import React from 'react';

// Array of technologies with their names and PNG URLs (backgroundless)
const technologies = [
  {
    name: 'React JS',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Flutter',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'MySQL',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'MongoDB',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Salesforce',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
  },
  {
    name: 'Spring Boot',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
  {
    name: 'Java',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Python',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'CSS3',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
];

const TechRibbon = () => {
  return (
    <div className="w-full bg-darkbg border-t border-b border-neon/20 py-2 overflow-hidden">
      <div className="relative w-full h-12">
        {/* Scrolling animation */}
        <div className="absolute left-0 top-0 flex items-center h-12 animate-tech-scroll whitespace-nowrap">
          {/* Repeat twice for seamless scroll */}
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center mx-6"
              title={tech.name}
            >
              <img
                src={tech.url}
                alt={tech.name}
                className="h-8 w-8 object-contain drop-shadow-neon"
                style={{ filter: 'drop-shadow(0 0 6px #39FF14)' }}
              />
              <span className="ml-2 text-neon text-sm font-mono">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Tailwind custom animation via CSS */}
      <style>
        {`
          @keyframes tech-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-tech-scroll {
            animation: tech-scroll 30s linear infinite;
            min-width: 200%;
          }
          .drop-shadow-neon {
            filter: drop-shadow(0 0 6px #39FF14);
          }
        `}
      </style>
    </div>
  );
};

export default TechRibbon;
