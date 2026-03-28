import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, ShoppingCart, Code, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'PDF Specification Builder',
      type: 'Document Management',
      url: 'https://pdf-spec-build.preview.emergentagent.com/',
      icon: FileText,
      pattern: 'grid',
    },
    {
      id: 2,
      title: 'Table Order System',
      type: 'Restaurant Management',
      url: 'https://table-order-system-19.preview.emergentagent.com/',
      icon: ShoppingCart,
      pattern: 'dots',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-warm/10 border border-orange-warm/20 rounded-full px-3 py-1.5 mb-4">
            <Code size={14} className="text-orange-warm" />
            <span className="text-xs font-medium text-dark font-inter">Our Projects</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark">
            Our Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                {/* Arched frame */}
                <div 
                  className="relative aspect-[3/4] rounded-t-full overflow-hidden mb-4 shadow-xl hover:shadow-2xl transition-shadow duration-300" 
                  style={{
                    background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
                  }}
                >
                  {/* Pattern overlay */}
                  {project.pattern === 'grid' && (
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                      opacity: 0.05,
                    }} />
                  )}
                  {project.pattern === 'dots' && (
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                      opacity: 0.05,
                    }} />
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    {/* Large icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 bg-cream/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    >
                      <Icon className="w-10 h-10 text-cream" />
                    </motion.div>

                    {/* Title */}
                    <div className="text-center">
                      <div className="text-cream font-playfair font-bold text-xl mb-2">
                        {project.title}
                      </div>
                      <div className="text-cream/80 font-inter text-xs">
                        {project.type}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-2 border-cream/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-cream/20 rounded-full" />
                  </div>
                  
                  {/* Type badge */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-cream/90 backdrop-blur-sm text-dark px-3 py-1.5 rounded-full text-xs font-medium font-inter shadow-lg">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-dark text-cream px-5 py-2.5 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm shadow-lg"
                  >
                    View Live Demo
                    <ExternalLink size={14} />
                  </a>
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