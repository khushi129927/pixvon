import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Patel',
      business: 'Cafe Owner, Mumbai',
      rating: 5,
      text: 'Pixvon created an amazing website for my cafe. Within 2 weeks of launch, I started getting online orders. Highly recommended for local businesses!',
      avatar: 'RP',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      business: 'Salon Owner, Surat',
      rating: 5,
      text: 'Professional work at an affordable price. The website looks beautiful and my customers love the online booking feature. Thank you Pixvon!',
      avatar: 'PS',
    },
    {
      id: 3,
      name: 'Dr. Amit Kumar',
      business: 'Clinic, Delhi',
      rating: 5,
      text: 'Fast delivery and excellent support. The team understood exactly what I needed for my clinic. Patients can now book appointments online easily.',
      avatar: 'AK',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-400">
            Don't just take our word for it - hear from our happy clients
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-slate-300 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonials[currentIndex].business}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              className="w-12 h-12 rounded-full border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-slate-400" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              className="w-12 h-12 rounded-full border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-slate-700 hover:bg-slate-600'
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