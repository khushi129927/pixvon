import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    'Cafés', 'Restaurants', 'Salons', 'Clinics', 'Gyms', 'Coaching Centers',
    'Photographers', 'Retailers', 'Hotels', 'Architects', 'Dentists',
    'Bakeries', 'Spas', 'Event Planners', 'Fashion Boutiques', 'Jewelers',
  ];

  // Split into two rows
  const row1 = industries.slice(0, 8);
  const row2 = industries.slice(8);

  return (
    <section className="py-20 md:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            We Build For Every Business
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From small startups to established businesses across India
          </p>
        </motion.div>
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
                className="flex-shrink-0 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 hover:border-blue-500/50 transition-colors duration-300"
              >
                <span className="text-slate-300 font-medium whitespace-nowrap text-lg">
                  {industry}
                </span>
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
                className="flex-shrink-0 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 hover:border-blue-500/50 transition-colors duration-300"
              >
                <span className="text-slate-300 font-medium whitespace-nowrap text-lg">
                  {industry}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default Industries;