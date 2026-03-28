import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, ShoppingCart, Sparkles, Zap } from 'lucide-react';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'PDF Specification Builder',
      subtitle: 'Smart Document Generation',
      description: 'Automated PDF creation with intelligent templates and real-time collaboration',
      type: 'Document Management',
      url: 'https://pdf-spec-build.preview.emergentagent.com/',
      icon: FileText,
      accentColor: '#C4854A',
    },
    {
      id: 2,
      title: 'Table Order System',
      subtitle: 'Restaurant Tech Platform',
      description: 'Seamless ordering experience with live menu management and table tracking',
      type: 'Restaurant Management',
      url: 'https://table-order-system-19.preview.emergentagent.com/',
      icon: ShoppingCart,
      accentColor: '#7A9E7E',
    },
  ];

  // Organic blob SVG shapes
  const BlobShape1 = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A9E7E" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C4854A" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient1)"
        d="M47.1,-58.9C59.6,-49.1,67.7,-32.7,71.2,-15.1C74.7,2.5,73.6,21.3,65.4,36.8C57.2,52.3,41.9,64.5,24.8,69.8C7.7,75.1,-11.2,73.5,-27.8,66.4C-44.4,59.3,-58.7,46.7,-66.3,31.1C-73.9,15.5,-74.8,-3.1,-69.7,-19.3C-64.6,-35.5,-53.5,-49.3,-39.8,-58.7C-26.1,-68.1,-10.4,-73.1,4.1,-78.1C18.6,-83.1,34.6,-68.7,47.1,-58.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );

  const BlobShape2 = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A9E7E" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C4854A" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient2)"
        d="M41.3,-54.5C53.4,-45.8,63,-32.9,67.4,-18.3C71.8,-3.7,71,12.6,64.8,26.3C58.6,40,47,51.1,33.3,57.9C19.6,64.7,3.8,67.2,-12.1,65.8C-28,64.4,-44,59.1,-56.2,49.2C-68.4,39.3,-76.8,24.8,-77.6,9.8C-78.4,-5.2,-71.6,-20.7,-61.4,-32.8C-51.2,-44.9,-37.6,-53.6,-23.8,-61.3C-10,-69,-5,-75.7,3.7,-80.5C12.4,-85.3,29.2,-63.2,41.3,-54.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );

  return (
    <section id="portfolio" className="py-20 bg-cream relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-warm/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sage/10 to-orange-warm/10 border border-sage/20 rounded-full px-4 py-2 mb-4">
            <Sparkles size={16} className="text-orange-warm" />
            <span className="text-sm font-medium text-dark font-inter">Featured Work</span>
          </div>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-dark mb-3">
            Our Work
          </h2>
          <p className="text-muted font-inter text-base max-w-2xl mx-auto">
            Building digital experiences that drive growth for ambitious businesses
          </p>
        </motion.div>

        {/* Projects Grid - Staggered Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const BlobComponent = index === 0 ? BlobShape1 : BlobShape2;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative ${isLeft ? 'md:mr-20' : 'md:ml-20'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Blob + Card Container */}
                  <div className={`relative ${!isLeft && 'md:order-2'}`}>
                    {/* Floating Blob Background */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 -z-10 scale-110"
                      style={{
                        filter: `drop-shadow(0 20px 40px ${project.accentColor}20)`,
                      }}
                    >
                      <BlobComponent />
                    </motion.div>

                    {/* Glassmorphic Card */}
                    <motion.div
                      whileHover={{
                        y: -8,
                        rotateY: hoveredIndex === index ? 5 : 0,
                        rotateX: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-2xl"
                      style={{
                        boxShadow: hoveredIndex === index 
                          ? `0 30px 60px -12px ${project.accentColor}40, 0 0 0 1px ${project.accentColor}20`
                          : '0 20px 40px -12px rgba(0,0,0,0.1)',
                      }}
                    >
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${project.accentColor}15, transparent 70%)`,
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon Badge */}
                        <div 
                          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}CC)`,
                          }}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Type Badge */}
                        <div className="inline-block bg-dark/5 border border-dark/10 rounded-full px-3 py-1 mb-4">
                          <span className="text-xs font-medium text-dark/70 font-inter">
                            {project.type}
                          </span>
                        </div>

                        {/* Minimal UI Mockup */}
                        <div className="bg-gradient-to-br from-white/50 to-white/30 rounded-2xl p-4 mb-6 border border-white/40">
                          <div className="space-y-2">
                            <div className="h-2 bg-gradient-to-r from-sage/30 to-orange-warm/30 rounded-full w-3/4" />
                            <div className="h-2 bg-gradient-to-r from-sage/20 to-orange-warm/20 rounded-full w-1/2" />
                            <div className="grid grid-cols-3 gap-2 mt-3">
                              {[1, 2, 3].map((i) => (
                                <div 
                                  key={i}
                                  className="h-12 bg-gradient-to-br from-white/60 to-white/40 rounded-lg border border-white/50"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Floating Indicator */}
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-4 right-4 w-3 h-3 rounded-full"
                          style={{ backgroundColor: project.accentColor }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div className={`space-y-4 ${!isLeft && 'md:order-1'}`}>
                    <div>
                      <h3 className="font-playfair font-bold text-3xl md:text-4xl text-dark mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg font-medium text-dark/60 font-inter mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-muted font-inter leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex flex-wrap gap-2">
                      {['Fast', 'Reliable', 'Scalable'].map((feature, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center gap-1.5 bg-white/60 backdrop-blur-sm border border-white/80 rounded-full px-3 py-1.5 text-xs font-medium text-dark/70 font-inter"
                        >
                          <Zap size={12} className="text-orange-warm" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm shadow-lg group"
                    >
                      View Live Demo
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
