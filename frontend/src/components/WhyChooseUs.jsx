import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Smartphone, Server, MessageSquare, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Professional websites starting at just ₹4,000',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Your website ready in just 7-10 days',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: '100% responsive design on all devices',
    },
    {
      icon: Server,
      title: '1 Year Free Hosting',
      description: 'Free domain and hosting for first year',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      description: 'Direct support whenever you need',
    },
    {
      icon: TrendingUp,
      title: 'SEO Ready',
      description: 'Built to be found on Google',
    },
  ];

  return (
    <section className="py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-5xl lg:text-7xl text-dark mb-20 text-center"
        >
          Why Choose Pixvon?
        </motion.h2>

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
                className="bg-cream-card border border-dark/10 rounded-2xl p-8 hover:shadow-lg hover:border-orange-warm/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-dark rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-cream" />
                </div>
                <h3 className="font-playfair font-bold text-xl text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted font-inter leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;