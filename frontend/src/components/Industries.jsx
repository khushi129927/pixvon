import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    'Cafés', 'Restaurants', 'Salons', 'Clinics', 'Gyms', 'Coaching Centers',
    'Photographers', 'Retailers', 'Hotels', 'Architects', 'Dentists',
    'Bakeries', 'Spas', 'Event Planners', 'Fashion Boutiques', 'Jewelers',
  ];

  const row1 = industries.slice(0, 8);
  const row2 = industries.slice(8);

  return (
    <section className="py-16 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark text-center"
        >
          We Build For Every Business
        </motion.h2>
      </div>

      <div className="relative mb-4">
        <div className="flex">
          <motion.div
            className="flex gap-3 pr-3"
            animate={{ x: [0, -1000] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' },
            }}
          >
            {[...row1, ...row1, ...row1].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-dark text-cream px-4 py-2 rounded-full font-medium font-inter text-xs whitespace-nowrap"
              >
                {industry}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-3 pr-3"
            animate={{ x: [-1000, 0] }}
            transition={{
              x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' },
            }}
          >
            {[...row2, ...row2, ...row2].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-dark text-cream px-4 py-2 rounded-full font-medium font-inter text-xs whitespace-nowrap"
              >
                {industry}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;