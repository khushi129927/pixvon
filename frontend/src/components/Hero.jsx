import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-cream pt-24 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-warm/40 rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-sage/40 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left side - 60% */}
          <div className="lg:col-span-3 space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Small decorative badge */}
              <div className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-3 py-1.5 mb-4">
                <Sparkles size={14} className="text-sage" />
                <span className="text-xs font-medium text-dark font-inter">Premium Web Design</span>
              </div>

              <h1 className="font-playfair font-bold text-dark leading-[0.95] mb-4">
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mb-1">
                  We Build
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mb-1">
                  Websites That
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl block">
                  <span className="text-orange-warm">Grow</span>
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl block">
                  Your Business
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted text-sm lg:text-base max-w-md font-inter"
            >
              Professional websites for local businesses starting at just{' '}
              <span className="text-dark font-semibold">₹4,000</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm shadow-lg"
              >
                Get a Quote
              </button>
              <div className="flex items-center gap-2 text-dark/40">
                <ArrowLeft size={14} />
                <ArrowRight size={14} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4 pt-6 text-xs text-muted font-inter"
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
              className="relative max-w-sm mx-auto"
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
                className="relative aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
                }}
              >
                {/* Decorative icons inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center gap-4">
                      <div className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-cream" />
                      </div>
                      <div className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Palette className="w-6 h-6 text-cream" />
                      </div>
                    </div>
                    <div className="w-16 h-16 mx-auto bg-cream/30 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-cream" />
                    </div>
                  </div>
                </div>

                {/* Floating label inside */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-dark font-inter shadow-lg">
                    pixvon.co.in
                  </div>
                </div>

                {/* Circular badge bottom right */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center shadow-xl">
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