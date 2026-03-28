import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Patel',
      business: 'Cafe Owner, Mumbai',
      rating: 5,
      text: 'Pixvon created an amazing website for my cafe. Within 2 weeks of launch, I started getting online orders. Highly recommended!',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      business: 'Salon Owner, Surat',
      rating: 5,
      text: 'Professional work at an affordable price. The website looks beautiful and my customers love it. Thank you Pixvon!',
    },
    {
      id: 3,
      name: 'Dr. Amit Kumar',
      business: 'Clinic, Delhi',
      rating: 5,
      text: 'Fast delivery and excellent support. Patients can now book appointments online easily. Great service!',
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-10 text-center"
        >
          What Clients Say
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-cream-card border border-dark/10 rounded-xl p-6"
            >
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-warm text-orange-warm" />
                ))}
              </div>
              <p className="text-base text-dark text-center mb-5 font-inter leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="text-center">
                <div className="text-dark font-bold font-inter text-sm mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted text-xs font-inter">
                  {testimonials[currentIndex].business}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-warm w-6' : 'bg-dark/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;