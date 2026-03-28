import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'You Contact Us',
      description: 'Reach out via WhatsApp or email',
    },
    {
      number: '02',
      title: 'We Discuss Your Needs',
      description: 'Understand your business and vision',
    },
    {
      number: '03',
      title: 'We Build Your Website',
      description: 'Create a stunning professional website',
    },
    {
      number: '04',
      title: 'Your Business Goes Live',
      description: 'Launch and start growing online',
    },
  ];

  return (
    <section id="services" className="py-16 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-10 text-center"
        >
          How It Works
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-dark/20">
            <motion.div
              className="h-full bg-orange-warm"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-cream border border-dark/10 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 mx-auto bg-dark text-cream rounded-full flex items-center justify-center mb-3 font-playfair font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="font-playfair font-bold text-base text-dark mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted text-xs font-inter text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;