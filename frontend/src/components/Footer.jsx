import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-cream-dark border-t border-dark/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair font-bold text-2xl text-dark mb-2">
              Pixvon
            </h3>
            <p className="text-muted font-inter mb-4 text-sm">
              Affordable. Professional. Online.
            </p>
            <p className="text-muted text-xs font-inter leading-relaxed">
              Building professional websites for local businesses across India.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-dark font-semibold font-inter mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted hover:text-dark transition-colors duration-200 text-sm font-inter"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark font-semibold font-inter mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-inter text-muted">
              <li>+91 9662522963</li>
              <li>hello@pixvon.co.in</li>
              <li>Surat, Gujarat, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted text-sm font-inter">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>in Surat, India</span>
          </div>
          <p className="text-muted text-sm font-inter">
            © 2025 Pixvon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;