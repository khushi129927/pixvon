import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Typically 7-10 days from the day we start. This includes design, development, and one round of revisions. We work efficiently to get your business online as quickly as possible.',
    },
    {
      question: 'What do I need to provide you?',
      answer: 'Just your business details, logo (if you have one), images, content, and your preferences. We\'ll guide you through everything needed and can even help with content writing if required.',
    },
    {
      question: 'Is the domain and hosting really included?',
      answer: 'Yes! We include a .com or .in domain and 1 year of hosting absolutely free. After the first year, you can renew at standard market rates or transfer to your own hosting.',
    },
    {
      question: 'Can I update my website myself?',
      answer: 'Yes, we can provide you with simple access to update content. For complex changes, our team is always available to help via WhatsApp support.',
    },
    {
      question: 'What happens after 1 year?',
      answer: 'After 1 year, you can choose to renew hosting with us at affordable rates, or we can help you transfer the website to your own hosting provider. The website is yours to keep.',
    },
    {
      question: 'Do you provide support after delivery?',
      answer: 'Absolutely! We provide ongoing WhatsApp support for any questions or minor updates. We\'re here to ensure your website continues to work perfectly for your business.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">
            Got questions? We've got answers
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 text-left group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-blue-400 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
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