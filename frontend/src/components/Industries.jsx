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
    <section className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-5xl lg:text-7xl text-dark text-center"
        >
          We Build For Every Business
        </motion.h2>
      </div>

      {/* First Row - Scroll Left */}
      <div className="relative mb-6">
        <div className="flex">
          <motion.div
            className="flex gap-4 pr-4"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {[...row1, ...row1, ...row1].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter text-sm whitespace-nowrap"
              >
                {industry}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Row - Scroll Right */}
      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-4 pr-4"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {[...row2, ...row2, ...row2].map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter text-sm whitespace-nowrap"
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