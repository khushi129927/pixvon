import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'bc5af404-4a5f-4381-823d-b5146723d028',
          name: formData.name,
          business: formData.businessName,
          phone: formData.phone,
          message: formData.message,
          from_name: 'Pixvon Website',
          subject: 'New Contact Form from Pixvon.co.in',
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          businessName: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Please try WhatsApp instead.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-base text-muted font-inter">
            Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href="https://wa.me/919662522963?text=Hi%2C%20I%20want%20to%20build%20a%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium font-inter hover:bg-green-700 transition-all duration-300 hover:scale-105 text-sm"
            >
              <Phone size={18} />
              WhatsApp Us
            </a>

            <a
              href="mailto:hello@pixvon.co.in"
              className="flex items-center justify-center gap-2 bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 text-sm"
            >
              <Send size={18} />
              Email Us
            </a>

            <div className="bg-cream-card border border-dark/10 rounded-xl p-5 space-y-3 mt-6">
              <div>
                <div className="text-xs text-muted font-inter mb-1">Phone</div>
                <div className="text-dark font-inter font-medium text-sm">+91 9662522963</div>
              </div>
              <div>
                <div className="text-xs text-muted font-inter mb-1">Email</div>
                <div className="text-dark font-inter font-medium text-sm">hello@pixvon.co.in</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-cream-card border border-dark/10 rounded-xl p-6 space-y-4">
              <h3 className="font-playfair font-bold text-xl text-dark mb-4">Send a Message</h3>
              
              <div>
                <label className="text-dark text-xs font-medium font-inter mb-1.5 block">
                  Your Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-cream border-dark/20 text-dark focus:border-orange-warm text-sm"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-dark text-xs font-medium font-inter mb-1.5 block">
                  Business Name *
                </label>
                <Input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="bg-cream border-dark/20 text-dark focus:border-orange-warm text-sm"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="text-dark text-xs font-medium font-inter mb-1.5 block">
                  Phone *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-cream border-dark/20 text-dark focus:border-orange-warm text-sm"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="text-dark text-xs font-medium font-inter mb-1.5 block">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="bg-cream border-dark/20 text-dark focus:border-orange-warm resize-none text-sm"
                  placeholder="Tell us about your business"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-dark text-cream px-6 py-3 rounded-full font-medium font-inter hover:bg-dark/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;