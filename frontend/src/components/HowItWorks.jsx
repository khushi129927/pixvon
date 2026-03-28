import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Code, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'You Contact Us',
      description: 'Reach out via WhatsApp or email to get started',
    },
    {
      number: 2,
      icon: Users,
      title: 'We Discuss Your Needs',
      description: 'We understand your business and design preferences',
    },
    {
      number: 3,
      icon: Code,
      title: 'We Build Your Website',
      description: 'Our team creates a stunning, professional website',
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Your Business Goes Live',
      description: 'Launch your online presence and grow your business',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Getting your business online is simple with our streamlined process
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-blue-500/50 to-blue-500/20">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                    {/* Number Badge */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-950 border-2 border-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-blue-400">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-blue-600" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;