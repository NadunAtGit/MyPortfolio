import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const phoneNumber = '+94 70 468 4339';
const whatsappNumber = '947704684339'; // WhatsApp link format: country code + number, no spaces or plus

const Footer = () => {
  return (
    <footer className="bg-darkbg text-neon py-8 px-4 mt-12 border-t border-neon/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social Profiles */}
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <a
            href="https://linkedin.com/in/nadun-sooriyaarchchi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/NadunAtGit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:nadunbiz27@gmail.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="https://instagram.com/your_instagram_username" // Replace with your Instagram username
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-white transition"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center md:items-end gap-1 text-white/80">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-neon" />
            <a
              href={`tel:${phoneNumber.replace(/ /g, '')}`}
              className="hover:text-neon underline transition"
              aria-label="Call Nadun"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-neon" />
            <span>nadunbiz27@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-6 text-center text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Nadun Sooriyaarchchi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
