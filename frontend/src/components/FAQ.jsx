import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'How long does it take to build a website?', answer: 'Typically 7-10 days from the day we start. This includes design, development, and one round of revisions.' },
    { question: 'What do I need to provide you?', answer: 'Just your business details, logo (if you have one), images, content, and your preferences. We\'ll guide you through everything.' },
    { question: 'Is the domain and hosting really included?', answer: 'Yes! We include a .com or .in domain and 1 year of hosting absolutely free.' },
    { question: 'Can I update my website myself?', answer: 'Yes, we can provide you with simple access to update content. For complex changes, our team is always available.' },
    { question: 'What happens after 1 year?', answer: 'After 1 year, you can choose to renew hosting with us at affordable rates, or transfer to your own hosting.' },
    { question: 'Do you provide support after delivery?', answer: 'Absolutely! We provide ongoing WhatsApp support for any questions or minor updates.' },
  ];

  return (
    <section className="py-16 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-10 text-center"
        >
          Questions?
        </motion.h2>
        <div className="space-y-2.5">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full bg-cream border border-dark/10 rounded-xl p-4 hover:border-orange-warm/50 transition-all duration-300 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="font-inter font-semibold text-sm text-dark pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? <Minus className="w-4 h-4 text-dark" /> : <Plus className="w-4 h-4 text-dark" />}
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="text-muted mt-2.5 font-inter leading-relaxed text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;