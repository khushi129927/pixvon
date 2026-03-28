import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Check, File, QrCode, ShoppingCart } from 'lucide-react';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'PDF Specification Builder',
      type: 'Document Management',
      url: 'https://pdf-spec-build.preview.emergentagent.com/',
      pattern: 'grid',
    },
    {
      id: 2,
      title: 'Table Order System',
      type: 'Restaurant Management',
      url: 'https://table-order-system-19.preview.emergentagent.com/',
      pattern: 'dots',
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-orange-warm/10 border border-orange-warm/20 rounded-full px-3 py-1.5 mb-3">
            <FileText size={14} className="text-orange-warm" />
            <span className="text-xs font-medium text-dark font-inter">Our Projects</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark">
            Our Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* PDF Specification Builder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group"
          >
            <div 
              className="relative aspect-[4/5] max-w-sm mx-auto rounded-t-full overflow-hidden mb-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2" 
              style={{
                background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
              }}
            >
              {/* Grid pattern overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }} />

              {/* Dark gradient overlay at bottom for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-t-full shadow-inner opacity-50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* PDF Document Mockup */}
                <motion.div
                  animate={{
                    y: hoveredIndex === 0 ? -5 : 0,
                    rotate: hoveredIndex === 0 ? -3 : -2,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative w-28 h-36 bg-white/90 rounded-lg shadow-2xl mb-6"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  {/* PDF Header */}
                  <div className="p-3 border-b border-gray-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-warm to-red-500 rounded-md mb-2 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  {/* PDF Content Lines */}
                  <div className="p-3 space-y-2">
                    <div className="w-full h-2 bg-gray-300 rounded" />
                    <div className="w-3/4 h-2 bg-gray-200 rounded" />
                    <div className="w-full h-2 bg-gray-300 rounded" />
                    <div className="w-2/3 h-2 bg-gray-200 rounded" />
                    <div className="w-full h-2 bg-gray-300 rounded" />
                  </div>
                  {/* PDF Icon Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">PDF</span>
                  </div>
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                  animate={{
                    x: hoveredIndex === 0 ? -3 : 0,
                    y: hoveredIndex === 0 ? -2 : 0,
                  }}
                  className="absolute top-8 left-6 bg-cream/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
                >
                  <Check size={12} className="text-green-600" />
                  <span className="text-xs font-medium text-dark font-inter">Export to PDF</span>
                </motion.div>

                <motion.div
                  animate={{
                    x: hoveredIndex === 0 ? 3 : 0,
                    y: hoveredIndex === 0 ? -2 : 0,
                  }}
                  className="absolute top-20 right-6 bg-cream/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
                >
                  <span className="text-xs font-medium text-dark font-inter">Auto Generated</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: hoveredIndex === 0 ? -3 : 0,
                  }}
                  className="absolute top-6 right-8"
                >
                  <File className="w-6 h-6 text-cream/60" />
                </motion.div>

                {/* Title at bottom */}
                <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                  <div className="text-white font-playfair font-bold text-lg mb-1 drop-shadow-lg">
                    PDF Specification Builder
                  </div>
                  <div className="text-white/90 font-inter text-xs drop-shadow-md">
                    Document Management
                  </div>
                </div>
              </div>
              
              {/* Type badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <span className="bg-cream/90 backdrop-blur-sm text-dark px-3 py-1.5 rounded-full text-xs font-medium font-inter shadow-lg">
                  Document Management
                </span>
              </div>
            </div>

            <div className="text-center">
              <a
                href={projects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark text-cream px-5 py-2.5 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm shadow-lg"
              >
                View Live Demo
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Table Order System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group"
          >
            <div 
              className="relative aspect-[4/5] max-w-sm mx-auto rounded-t-full overflow-hidden mb-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2" 
              style={{
                background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
              }}
            >
              {/* Dot pattern overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-t-full shadow-inner opacity-50" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Tablet/Phone Mockup */}
                <motion.div
                  animate={{
                    y: hoveredIndex === 1 ? -5 : 0,
                    rotate: hoveredIndex === 1 ? 2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative w-32 h-44 bg-gray-900 rounded-2xl shadow-2xl mb-6 p-2"
                >
                  {/* Device Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl overflow-hidden">
                    {/* Menu Header */}
                    <div className="bg-gradient-to-r from-orange-warm to-orange-600 p-2">
                      <div className="text-white text-xs font-bold">Restaurant Menu</div>
                    </div>
                    {/* Menu Categories */}
                    <div className="p-2 space-y-1.5">
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1.5 shadow-sm">
                        <div className="w-4 h-4 bg-orange-warm/20 rounded flex items-center justify-center">
                          <ShoppingCart className="w-2 h-2 text-orange-warm" />
                        </div>
                        <div className="flex-1">
                          <div className="w-12 h-1.5 bg-gray-300 rounded" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1.5 shadow-sm">
                        <div className="w-4 h-4 bg-sage/20 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-sage rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="w-10 h-1.5 bg-gray-300 rounded" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-1.5 shadow-sm">
                        <div className="w-4 h-4 bg-orange-warm/20 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-orange-warm rounded" />
                        </div>
                        <div className="flex-1">
                          <div className="w-14 h-1.5 bg-gray-300 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Device notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-b-full" />
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                  animate={{
                    x: hoveredIndex === 1 ? -3 : 0,
                    y: hoveredIndex === 1 ? -2 : 0,
                  }}
                  className="absolute top-8 left-6 bg-cream/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
                >
                  <span className="text-xs font-medium text-dark font-inter">Live Orders</span>
                </motion.div>

                <motion.div
                  animate={{
                    x: hoveredIndex === 1 ? 3 : 0,
                    y: hoveredIndex === 1 ? -2 : 0,
                  }}
                  className="absolute top-20 right-6 bg-cream/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
                >
                  <span className="text-xs font-medium text-dark font-inter">Table Management</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: hoveredIndex === 1 ? -3 : 0,
                  }}
                  className="absolute top-6 right-8"
                >
                  <QrCode className="w-6 h-6 text-cream/60" />
                </motion.div>

                {/* Title at bottom */}
                <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                  <div className="text-white font-playfair font-bold text-lg mb-1 drop-shadow-lg">
                    Table Order System
                  </div>
                  <div className="text-white/90 font-inter text-xs drop-shadow-md">
                    Restaurant Management
                  </div>
                </div>
              </div>
              
              {/* Type badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <span className="bg-cream/90 backdrop-blur-sm text-dark px-3 py-1.5 rounded-full text-xs font-medium font-inter shadow-lg">
                  Restaurant Management
                </span>
              </div>
            </div>

            <div className="text-center">
              <a
                href={projects[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark text-cream px-5 py-2.5 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm shadow-lg"
              >
                View Live Demo
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
