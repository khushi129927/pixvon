import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-5xl lg:text-7xl text-dark mb-20 text-center"
        >
          About Pixvon
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Arched frame photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="aspect-[3/4] rounded-t-full overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(to bottom, #7A9E7E 0%, #C4854A 100%)',
              }}
            >
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-dark rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold font-playfair text-cream">P</span>
                </div>
                <div className="text-5xl font-bold font-playfair text-cream">
                  Pixvon
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
            <p className="text-lg text-dark font-inter leading-relaxed">
              At <span className="font-bold">Pixvon</span>, we help local businesses across India establish a powerful online presence. Born from pixels and built for growth, we craft fast, affordable, and professional websites.
            </p>
            <p className="text-lg text-muted font-inter leading-relaxed">
              We understand that every rupee counts for small businesses. That's why we've created a streamlined process that delivers premium-quality websites at prices that won't break your budget.
            </p>
            <p className="text-lg text-muted font-inter leading-relaxed">
              Based in <span className="text-dark font-semibold">Surat, Gujarat</span>, we serve businesses across India - from Mumbai to Delhi, Bangalore to Kolkata.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;