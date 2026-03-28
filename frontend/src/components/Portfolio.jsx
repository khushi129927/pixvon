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
    <section id="portfolio" className="py-32 bg-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border border-sage/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-orange-warm/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-warm/10 border border-orange-warm/20 rounded-full px-4 py-2 mb-6">
            <Code size={16} className="text-orange-warm" />
            <span className="text-sm font-medium text-dark font-inter">Our Projects</span>
          </div>
          <h2 className="font-playfair font-bold text-5xl lg:text-7xl text-dark">
            Our Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
                  className="relative aspect-[3/4] rounded-t-full overflow-hidden mb-6 shadow-xl hover:shadow-2xl transition-shadow duration-300" 
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Large icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-24 h-24 bg-cream/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-lg"
                    >
                      <Icon className="w-12 h-12 text-cream" />
                    </motion.div>

                    {/* Title */}
                    <div className="text-center">
                      <div className="text-cream font-playfair font-bold text-2xl mb-3">
                        {project.title}
                      </div>
                      <div className="text-cream/80 font-inter text-sm">
                        {project.type}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 w-12 h-12 border-2 border-cream/20 rounded-full" />
                    <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-cream/20 rounded-full" />
                  </div>
                  
                  {/* Type badge */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2">
                    <span className="bg-cream/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-medium font-inter shadow-lg">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm shadow-lg"
                  >
                    View Live Demo
                    <ExternalLink size={16} />
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