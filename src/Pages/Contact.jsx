import React, { useRef } from 'react';
import { FaPhoneAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailtoLink = `mailto:nadunbiz27@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
    formRef.current.reset();
  };

  return (
    <div className="min-h-screen bg-darkbg flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-12">
      
      {/* Left Side: Creative Quote */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-neon mb-6 leading-tight tracking-wide drop-shadow-neon">
          Want to build a <span className="text-white">stunning</span> website <br /> or a <span className="text-white">powerful</span> mobile app?
        </h1>
        <p className="text-white/80 text-lg max-w-lg mb-8 font-mono italic">
          Let’s bring your ideas to life with modern, sleek design and flawless functionality. Reach out and start your digital journey today!
        </p>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 bg-darkbg/70 backdrop-blur-md border border-neon/40 rounded-2xl shadow-lg p-10 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-neon mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-neon text-xl" />
            <span className="text-white/90 text-lg">+94 77 123 4567</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-neon text-xl" />
            <a
              href="https://linkedin.com/in/nadun-sooriyaarchchi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon underline hover:text-white text-lg"
            >
              linkedin.com/in/nadun-sooriyaarchchi
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-neon text-xl" />
            <a
              href="mailto:nadunbiz27@gmail.com"
              className="text-neon underline hover:text-white text-lg"
            >
              nadunbiz27@gmail.com
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="bg-darkbg border border-neon/40 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-neon"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="bg-darkbg border border-neon/40 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-neon"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="bg-darkbg border border-neon/40 rounded-lg px-4 py-3 text-white placeholder:text-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-neon"
          />
          <button
            type="submit"
            className="bg-neon text-darkbg font-bold py-3 rounded-full shadow-lg hover:bg-neon/90 transition"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
