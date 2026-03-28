import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Image, Type, Smartphone } from 'lucide-react';

const ScrollBrowser = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const browserX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 400, -400, 0]);
  const content1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const content2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.5, 0.6], [0, 1, 1, 0]);
  const content3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 0.85, 0.95], [0, 1, 1, 0]);
  const content4Opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  const BrowserMockup = () => (
    <div className="bg-cream-dark border-2 border-dark/10 rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm sm:max-w-2xl lg:max-w-3xl">
      <div className="bg-cream-dark border-b border-dark/10 p-2 sm:p-3 lg:p-4 flex items-center gap-2">
        <div className="flex gap-1.5 sm:gap-2">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 mx-3 sm:mx-4 lg:mx-6 bg-cream rounded-md lg:rounded-lg px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-[10px] sm:text-xs text-muted font-inter">
          pixvon.co.in
        </div>
      </div>
      
      <div className="aspect-[4/3] bg-gradient-to-br from-cream-card to-cream flex items-center justify-center relative">
        {/* Website preview mockup */}
        <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
          {/* Header bar */}
          <div className="h-8 sm:h-10 lg:h-12 bg-sage/20 rounded-lg mb-2 sm:mb-3 lg:mb-4 flex items-center px-2 sm:px-3 lg:px-4 gap-2 sm:gap-3">
            <div className="w-12 sm:w-16 lg:w-20 h-2.5 sm:h-3 lg:h-4 bg-sage/40 rounded" />
            <div className="ml-auto flex gap-1.5 sm:gap-2">
              <div className="w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 bg-sage/40 rounded" />
              <div className="w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 bg-sage/40 rounded" />
              <div className="w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 lg:h-3 bg-sage/40 rounded" />
            </div>
          </div>
          
          {/* Hero section */}
          <div className="h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-sage/30 to-orange-warm/30 rounded-lg lg:rounded-xl mb-2 sm:mb-3 lg:mb-4 p-3 sm:p-4 lg:p-6 flex items-center justify-between">
            <div className="space-y-1 sm:space-y-1.5 lg:space-y-2 flex-1">
              <div className="w-3/4 h-3 sm:h-4 lg:h-6 bg-dark/20 rounded" />
              <div className="w-1/2 h-2 sm:h-3 lg:h-4 bg-dark/10 rounded" />
              <div className="w-16 sm:w-20 lg:w-24 h-5 sm:h-6 lg:h-8 bg-dark/30 rounded-full mt-2 sm:mt-2.5 lg:mt-3" />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-dark/10 rounded-xl lg:rounded-2xl flex items-center justify-center">
              <Layout className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-dark/30" />
            </div>
          </div>
          
          {/* Content grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5 lg:gap-3">
            <div className="h-14 sm:h-16 lg:h-20 bg-orange-warm/20 rounded-md lg:rounded-lg flex items-center justify-center">
              <Image className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-warm/60" />
            </div>
            <div className="h-14 sm:h-16 lg:h-20 bg-sage/20 rounded-md lg:rounded-lg flex items-center justify-center">
              <Type className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-sage/60" />
            </div>
            <div className="h-14 sm:h-16 lg:h-20 bg-orange-warm/20 rounded-md lg:rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-warm/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PillBadge = ({ text }) => (
    <div className="inline-block bg-dark text-cream px-4 py-2 rounded-full text-xs font-medium font-inter shadow-lg">
      {text}
    </div>
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-cream">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Browser - centered on mobile, animated on desktop */}
          <motion.div
            style={{ x: browserX }}
            className="flex justify-center mb-8 lg:mb-0"
          >
            <BrowserMockup />
          </motion.div>

          {/* Content 1 */}
          <motion.div
            style={{ opacity: content1Opacity }}
            className="absolute left-6 right-6 lg:right-auto lg:left-12 bottom-8 lg:top-1/2 lg:-translate-y-1/2 max-w-md space-y-3 lg:space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-3 py-1.5 mb-2">
              <Layout size={14} className="text-sage" />
              <span className="text-xs font-medium text-dark font-inter">Design</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-6xl text-dark leading-tight">
              Stunning<br />Websites
            </h2>
            <p className="text-muted font-inter text-sm sm:text-base lg:text-lg">
              That make your business look world class
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <PillBadge text="Mobile Ready" />
              <PillBadge text="Fast" />
              <PillBadge text="Premium" />
            </div>
          </motion.div>

          {/* Content 2 */}
          <motion.div
            style={{ opacity: content2Opacity }}
            className="absolute left-6 right-6 lg:right-auto lg:left-12 bottom-8 lg:top-1/2 lg:-translate-y-1/2 max-w-md space-y-3 lg:space-y-6"
          >
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-6xl text-dark leading-tight">
              Delivered in<br />7-10 Days
            </h2>
            <p className="text-muted font-inter text-sm sm:text-base lg:text-lg">
              Quick turnaround, zero compromise on quality
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <PillBadge text="Quick Delivery" />
              <PillBadge text="Revisions Included" />
            </div>
          </motion.div>

          {/* Content 3 */}
          <motion.div
            style={{ opacity: content3Opacity }}
            className="absolute left-6 right-6 lg:left-auto lg:right-12 bottom-8 lg:top-1/2 lg:-translate-y-1/2 max-w-md space-y-3 lg:space-y-6"
          >
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-6xl text-dark leading-tight">
              1 Year Free<br />Hosting
            </h2>
            <p className="text-muted font-inter text-sm sm:text-base lg:text-lg">
              We handle everything, you focus on business
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <PillBadge text="Free Hosting" />
              <PillBadge text="Free SSL" />
              <PillBadge text="Free Domain" />
            </div>
          </motion.div>

          {/* Content 4 */}
          <motion.div
            style={{ opacity: content4Opacity }}
            className="absolute left-6 right-6 lg:left-1/2 lg:-translate-x-1/2 bottom-8 lg:top-1/2 lg:-translate-y-1/2 max-w-2xl space-y-3 lg:space-y-6 text-center"
          >
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-6xl text-dark leading-tight">
              Your Business.<br />Online. Growing.
            </h2>
            <p className="text-muted font-inter text-sm sm:text-base lg:text-lg">
              Join 50+ businesses already growing with Pixvon
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
              <PillBadge text="50+ Clients" />
              <PillBadge text="Surat India" />
              <PillBadge text="Since 2024" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBrowser;