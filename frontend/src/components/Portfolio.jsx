import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'PDF Specification Builder',
      type: 'Document Management',
      url: 'https://pdf-spec-build.preview.emergentagent.com/',
    },
    {
      id: 2,
      title: 'Table Order System',
      type: 'Restaurant Management',
      url: 'https://table-order-system-19.preview.emergentagent.com/',
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-5xl lg:text-7xl text-dark mb-20 text-center"
        >
          Our Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Arched frame */}
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden mb-6" style={{
                background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
              }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-cream/90 font-playfair font-bold text-2xl mb-2">
                      {project.title}
                    </div>
                    <div className="text-cream/70 font-inter text-sm">
                      {project.type}
                    </div>
                  </div>
                </div>
                
                {/* Type badge */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2">
                  <span className="bg-cream/90 backdrop-blur-sm text-dark px-4 py-2 rounded-full text-xs font-medium font-inter">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm"
                >
                  View Live Demo
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;