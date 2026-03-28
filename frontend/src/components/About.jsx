import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 border border-sage/10 rounded-full" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-orange-warm/10 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-5xl lg:text-7xl text-dark mb-20 text-center"
        >
          About Pixvon
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Arched frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="aspect-[3/4] rounded-t-full overflow-hidden flex items-center justify-center shadow-2xl"
              style={{
                background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
              }}
            >
              <div className="text-center p-8 relative">
                {/* Decorative grid pattern */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                  opacity: 0.05,
                }} />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-6 bg-dark rounded-full flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-4xl font-bold font-playfair text-cream">P</span>
                  </motion.div>
                  <div className="text-5xl font-bold font-playfair text-cream mb-6">
                    Pixvon
                  </div>
                  
                  {/* Feature icons */}
                  <div className="flex justify-center gap-4 mt-8">
                    <div className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-cream" />
                    </div>
                    <div className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-cream" />
                    </div>
                    <div className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-cream" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-orange-warm/10 border border-orange-warm/20 rounded-full px-4 py-2 mb-4">
              <TrendingUp size={16} className="text-orange-warm" />
              <span className="text-sm font-medium text-dark font-inter">Our Story</span>
            </div>

            <p className="text-lg text-dark font-inter leading-relaxed">
              At <span className="font-bold">Pixvon</span>, we help local businesses across India establish a powerful online presence. Born from pixels and built for growth, we craft fast, affordable, and professional websites.
            </p>
            <p className="text-lg text-muted font-inter leading-relaxed">
              We understand that every rupee counts for small businesses. That's why we've created a streamlined process that delivers premium-quality websites at prices that won't break your budget.
            </p>
            <p className="text-lg text-muted font-inter leading-relaxed">
              Based in <span className="text-dark font-semibold">Surat, Gujarat</span>, we serve businesses across India - from Mumbai to Delhi, Bangalore to Kolkata.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center bg-cream-card border border-dark/10 rounded-xl p-4">
                <div className="text-2xl font-bold font-playfair text-orange-warm mb-1">50+</div>
                <div className="text-xs text-muted font-inter">Clients</div>
              </div>
              <div className="text-center bg-cream-card border border-dark/10 rounded-xl p-4">
                <div className="text-2xl font-bold font-playfair text-sage mb-1">7-10</div>
                <div className="text-xs text-muted font-inter">Days</div>
              </div>
              <div className="text-center bg-cream-card border border-dark/10 rounded-xl p-4">
                <div className="text-2xl font-bold font-playfair text-orange-warm mb-1">100%</div>
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