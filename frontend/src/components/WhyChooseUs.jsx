import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Smartphone, Server, MessageSquare, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Professional websites starting at just ₹4,000 - perfect for small businesses',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Your website ready in just 7-10 days - no long waiting periods',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: '100% responsive design that looks perfect on all devices',
    },
    {
      icon: Server,
      title: '1 Year Free Hosting',
      description: 'Free domain and hosting included for the first year',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      description: 'Direct WhatsApp support for quick assistance whenever you need',
    },
    {
      icon: TrendingUp,
      title: 'SEO Ready',
      description: 'Built with SEO best practices to help your business get found online',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Pixvon?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We make getting your business online simple, affordable, and hassle-free
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;