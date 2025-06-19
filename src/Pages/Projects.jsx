import React, { useRef, useEffect, useState } from 'react';
import { FaGlobe, FaMobileAlt, FaCode, FaJava, FaRobot, FaGithub,FaWarehouse } from 'react-icons/fa';
import { SiSalesforce } from 'react-icons/si';

// Status Badge Component
const StatusBadge = ({ status }) => (
  <span className={`text-xs font-bold px-2 py-1 rounded-full ml-2 ${
    status === 'ongoing'
      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/50'
      : 'bg-green-500/20 text-green-400 border border-green-400/50'
  }`}>
    {status === 'ongoing' ? 'IN PROGRESS' : 'COMPLETED'}
  </span>
);

const projects = [
  {
    title: "Car Service Center Management System",
    description: "Cross-platform system with Flutter customer app and React-Node.js web app, integrating MySQL, JWT auth, and Firebase Storage.",
    icon: <FaMobileAlt className="text-2xl text-[#39FF14]" />,
    tech: ["MERN Stack", "Flutter", "MySQL", "JWT", "Firebase"],
    githubLink: "https://github.com/NadunAtGit/CarServiceCenterMS.git",
    status: "finished"
  },
  {
    title: "React-Tailwind Portfolio",
    description: "Modern personal portfolio website with dark/neon theme, particle animations, and responsive design.",
    icon: <FaGlobe className="text-2xl text-[#39FF14]" />,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/yourusername/portfolio",
    status: "finished"
  },
  {
    title: "Linktree-like App (Distributed Systems)",
    description: "MERN stack application hosted on Azure with automatic failover and multi-client support for distributed systems practice.",
    icon: <FaCode className="text-2xl text-[#39FF14]" />,
    tech: ["MERN Stack", "Azure", "Distributed Systems"],
    githubLink: "https://github.com/yourusername/linktree-app",
    status: "finished"
  },
  
  {
    title: "HackX 2023 Official Website",
    description: "Responsive static website for inter-university Hackathon with creative UI using React and modern CSS.",
    icon: <FaGlobe className="text-2xl text-[#39FF14]" />,
    tech: ["React", "CSS", "Responsive Design"],
    githubLink: "https://github.com/yourusername/hackx2024",
    status: "finished"
  },
  {
    title: "Recipe Sharing App",
    description: "Android app for sharing recipes with images/videos using Firebase Firestore, Auth, and Storage.",
    icon: <FaMobileAlt className="text-2xl text-[#39FF14]" />,
    tech: ["Java", "Firebase", "Android"],
    githubLink: "https://github.com/NadunAtGit/The_Chef_App_JavaAndroid.git",
    status: "finished"
  },
  {
    title: "Employee Management System",
    description: "Full-stack application for managing employee records with role-based access using MERN stack.",
    icon: <FaCode className="text-2xl text-[#39FF14]" />,
    tech: ["MERN Stack", "MongoDB", "Express"],
    githubLink: "https://github.com/NadunAtGit/EmployeeManagement.git",
    status: "finished"
  },
  {
    title: "Inventory Management System",
    description: "Inventory Management System for Computer Shop using PHP, MySQL, and Frontend Technologies",
    icon: <FaWarehouse className="text-2xl text-[#39FF14]" />,
    tech: ["php", "HTML", "CSS", "JavaScript", "MySQL","Bootstrap"],
    githubLink: "https://github.com/NadunAtGit/WebGroupProject.git",
    status: "finished"
  },
  {
    title: "Fuel Quota Distribution App",
    description: "Full-stack system with Spring Boot backend, Flutter mobile app, and React frontend.",
    icon: <FaMobileAlt className="text-2xl text-[#39FF14]" />,
    tech: ["Spring Boot", "Flutter", "React", "MySQL"],
    githubLink: "https://github.com/NadunAtGit/fuel-quota-app.git",
    status: "ongoing"
  }
];

const TimelineItem = ({ project, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Desktop Card
  const card = (
    <div
      className={`bg-gray-900 border-2 border-[#39FF14] rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : isLeft ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-3">
          {project.icon}
          <h3 className="text-xl font-bold text-[#39FF14]">{project.title}</h3>
        </div>
        <StatusBadge status={project.status} />
      </div>
      <p className="text-white/80 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-[#39FF14]/10 text-[#39FF14] px-3 py-1 rounded-full text-xs border border-[#39FF14]/30"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gray-900 bg-[#39FF14] px-4 py-2 rounded-full font-semibold hover:bg-[#39FF14]/80 transition-colors"
      >
        <FaGithub />
        View Code
      </a>
    </div>
  );

  return (
    <div ref={ref} className="relative w-full mb-16">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center w-full">
        {isLeft ? (
          <>
            <div className="w-5/12 pr-8">{card}</div>
            <div className="w-2/12 flex justify-center">
              <div className="w-6 h-6 bg-[#39FF14] rounded-full border-4 border-gray-950 shadow-lg relative">
                <div className="absolute inset-0 bg-[#39FF14] rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            <div className="w-5/12"></div>
          </>
        ) : (
          <>
            <div className="w-5/12"></div>
            <div className="w-2/12 flex justify-center">
              <div className="w-6 h-6 bg-[#39FF14] rounded-full border-4 border-gray-950 shadow-lg relative">
                <div className="absolute inset-0 bg-[#39FF14] rounded-full animate-ping opacity-20"></div>
              </div>
            </div>
            <div className="w-5/12 pl-8">{card}</div>
          </>
        )}
      </div>
      {/* Mobile Layout */}
      <div className="flex md:hidden items-start gap-4">
        <div className="flex flex-col items-center mt-2">
          <div className="w-4 h-4 bg-[#39FF14] rounded-full border-2 border-gray-950 shadow-lg relative">
            <div className="absolute inset-0 bg-[#39FF14] rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
        <div
          className={`bg-gray-900 border-2 border-[#39FF14] rounded-xl p-4 shadow-lg flex-1 transition-all duration-500 transform ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-5'
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              {project.icon}
              <h3 className="text-lg font-bold text-[#39FF14]">{project.title}</h3>
            </div>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-white/80 mb-3 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#39FF14]/10 text-[#39FF14] px-2 py-1 rounded-full text-xs border border-[#39FF14]/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-900 bg-[#39FF14] px-3 py-2 rounded-full font-semibold hover:bg-[#39FF14]/80 transition-colors text-sm"
          >
            <FaGithub />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="relative py-20 bg-gray-950 min-h-screen">
      {/* Timeline Line - Desktop */}
      <div className="mt-20 hidden md:block absolute left-1/2 top-32 bottom-20 w-1 bg-gradient-to-b from-[#39FF14]/60 via-[#39FF14]/40 to-transparent -translate-x-1/2"></div>
      {/* Timeline Line - Mobile */}
      <div className="md:hidden absolute left-6 top-32 bottom-20 w-0.5 bg-gradient-to-b from-[#39FF14]/60 via-[#39FF14]/40 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-4">
            Project Timeline
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A journey through my development projects and technical achievements
          </p>
        </div>
        <div className="relative">
          {projects.map((project, index) => (
            <TimelineItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
