import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { value: 50, suffix: '+', label: 'Clients Served', animated: true },
    { value: 100, suffix: '%', label: 'Mobile Friendly', animated: true },
    { value: 1, suffix: ' Year', label: 'Free Hosting', animated: false },
    { value: 10, suffix: ' Days', label: 'Delivery Time', animated: true },
  ];

  return (
    <section className="py-12 bg-cream border-y border-dark/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold font-playfair text-dark mb-2">
                {stat.animated ? (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>{stat.value}{stat.suffix}</span>
                )}
              </div>
              <div className="text-xs text-muted font-inter">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;