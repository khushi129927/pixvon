import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-10 text-center"
        >
          About Pixvon
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-sm mx-auto"
          >
            <div
              className="aspect-[3/4] rounded-t-full overflow-hidden flex items-center justify-center shadow-2xl"
              style={{ background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)' }}
            >
              <div className="text-center p-6 relative">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                  opacity: 0.05,
                }} />
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-3 bg-dark rounded-full flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl font-bold font-playfair text-cream">P</span>
                  </motion.div>
                  <div className="text-3xl font-bold font-playfair text-cream mb-3">Pixvon</div>
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="w-9 h-9 bg-cream/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-cream" />
                    </div>
                    <div className="w-9 h-9 bg-cream/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-cream" />
                    </div>
                    <div className="w-9 h-9 bg-cream/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-cream" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 bg-orange-warm/10 border border-orange-warm/20 rounded-full px-3 py-1.5 mb-2">
              <TrendingUp size={14} className="text-orange-warm" />
              <span className="text-xs font-medium text-dark font-inter">Our Story</span>
            </div>
            <p className="text-sm text-dark font-inter leading-relaxed">
              At <span className="font-bold">Pixvon</span>, we help local businesses across India establish a powerful online presence. Born from pixels and built for growth.
            </p>
            <p className="text-sm text-muted font-inter leading-relaxed">
              We deliver premium-quality websites at prices that won't break your budget. Based in <span className="text-dark font-semibold">Surat, Gujarat</span>, serving all of India.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="text-center bg-cream-card border border-dark/10 rounded-lg p-2.5">
                <div className="text-lg font-bold font-playfair text-orange-warm mb-1">50+</div>
                <div className="text-xs text-muted font-inter">Clients</div>
              </div>
              <div className="text-center bg-cream-card border border-dark/10 rounded-lg p-2.5">
                <div className="text-lg font-bold font-playfair text-sage mb-1">7-10</div>
                <div className="text-xs text-muted font-inter">Days</div>
              </div>
              <div className="text-center bg-cream-card border border-dark/10 rounded-lg p-2.5">
                <div className="text-lg font-bold font-playfair text-orange-warm mb-1">100%</div>
                <div className="text-xs text-muted font-inter">Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;