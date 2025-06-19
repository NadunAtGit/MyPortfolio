import React, { useState } from 'react';
import { FaTerminal } from 'react-icons/fa'; // You can change this to any icon you like

const navLinks = [
  { name: 'Home', to: '#home' },
  { name: 'About', to: '#about' },
  { name: 'Technologies', to: '#technologies' },
  { name: 'Contact', to: '#contact' },
  { name: 'Projects', to: '#projects' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-neon shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4
        bg-darkbg/60 backdrop-blur-md rounded-xl transition-all duration-300">
        <a
          href="#home"
          className="text-3xl font-orbitron font-bold tracking-wide flex items-center gap-2"
          style={{
            textShadow: '0 0 8px #39FF14, 0 0 16px #39FF14',
          }}
        >
          <FaTerminal className="text-neon text-3xl" /> {/* Programming Icon */}
          BitbyNadun
        </a>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                className="text-lg font-montserrat font-semibold transition-colors duration-200 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-7 my-1 rounded-full bg-neon transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-1 w-7 my-1 rounded-full bg-neon transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-1 w-7 my-1 rounded-full bg-neon transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-darkbg/80 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.to}
                className="text-lg font-semibold transition-colors duration-200 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
