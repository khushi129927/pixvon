import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, Smartphone, Server, MessageSquare, TrendingUp, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Professional websites starting at just ₹4,000',
      color: 'orange',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Your website ready in just 7-10 days',
      color: 'sage',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: '100% responsive design on all devices',
      color: 'orange',
    },
    {
      icon: Server,
      title: '1 Year Free Hosting',
      description: 'Free domain and hosting for first year',
      color: 'sage',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      description: 'Direct support whenever you need',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'SEO Ready',
      description: 'Built to be found on Google',
      color: 'sage',
    },
  ];

  return (
    <section className="py-16 bg-cream-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-3 py-1.5 mb-3">
            <Sparkles size={14} className="text-sage" />
            <span className="text-xs font-medium text-dark font-inter">Why Choose Us</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark">
            Why Choose Pixvon?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const bgColor = feature.color === 'orange' ? 'from-orange-warm to-orange-warm/80' : 'from-sage to-sage/80';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-cream-card border border-dark/10 rounded-xl p-5 hover:shadow-xl hover:border-orange-warm/50 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.02) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-11 h-11 bg-gradient-to-br ${bgColor} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="font-playfair font-bold text-base text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted font-inter leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
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