import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-cream pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left side - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-playfair font-bold text-dark leading-[0.95] mb-6">
                <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl block mb-2">
                  We Build
                </span>
                <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl block mb-2">
                  Websites That
                </span>
                <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl block">
                  <span className="text-orange-warm">Grow</span>
                </span>
                <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl block">
                  Your Business
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted text-base lg:text-lg max-w-md font-inter"
            >
              Professional websites for local businesses starting at just{' '}
              <span className="text-dark font-semibold">₹4,000</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-dark text-cream px-8 py-4 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm"
              >
                Get a Quote
              </button>
              <div className="flex items-center gap-2 text-dark/40">
                <ArrowLeft size={16} />
                <ArrowRight size={16} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 pt-8 text-xs text-muted font-inter"
            >
              <span>Pixvon</span>
              <span>•</span>
              <span>Surat, India</span>
              <span>•</span>
              <span>Since 2024</span>
            </motion.div>
          </div>

          {/* Right side - 40% */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Arched Frame */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative aspect-[3/4] rounded-t-full overflow-hidden"
                style={{
                  background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
                }}
              >
                {/* Floating label inside */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  <div className="bg-cream/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-dark font-inter">
                    pixvon.co.in
                  </div>
                </div>

                {/* Circular badge bottom right */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center">
                    <span className="text-cream text-xs font-bold font-inter">50+</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;