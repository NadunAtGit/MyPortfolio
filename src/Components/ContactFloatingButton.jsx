import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiSalesforce } from 'react-icons/si';

const links = [
  {
    href: 'https://www.linkedin.com/in/nadun-sooriyaarachchi-092896333',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    color: 'hover:text-[#0A66C2]',
  },
  {
    href: 'https://github.com/NadunAtGit',
    icon: <FaGithub />,
    label: 'GitHub',
    color: 'hover:text-white',
  },
  {
    href: 'https://www.salesforce.com/trailblazer/vn916ps48z8m8dxq86', // Replace with your Trailblazer profile
    icon: <SiSalesforce />,
    label: 'Trailblazer',
    color: 'hover:text-[#00A1E0]',
  },
];

const ContactFloatingButton = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div
        className="flex flex-col items-center justify-center gap-6
          bg-white/10 backdrop-blur-lg border border-neon/50
          rounded-full shadow-lg py-6 px-3
          transition-transform hover:scale-105"
        style={{
          boxShadow: '0 4px 32px 0 #39FF14AA',
          minHeight: '180px',
          minWidth: '64px',
        }}
      >
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`text-neon text-3xl transition ${link.color} hover:scale-125`}
            style={{ filter: 'drop-shadow(0 0 6px #39FF14)' }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactFloatingButton;
