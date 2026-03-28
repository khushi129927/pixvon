import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBrowser = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform scroll progress to browser X position
  // 0% scroll -> 0 (center)
  // 33% scroll -> 400 (right)
  // 66% scroll -> -400 (left)
  // 100% scroll -> 0 (center)
  const browserX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 400, -400, 0]);

  // Content opacity based on scroll position
  const content1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const content2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.5, 0.6], [0, 1, 1, 0]);
  const content3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 0.85, 0.95], [0, 1, 1, 0]);
  const content4Opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  const BrowserMockup = () => (
    <div className="bg-cream-dark border-2 border-dark/10 rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl">
      {/* Browser Chrome */}
      <div className="bg-cream-dark border-b border-dark/10 p-4 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 mx-6 bg-cream rounded-lg px-4 py-2 text-xs text-muted font-inter">
          pixvon.co.in
        </div>
      </div>
      
      {/* Browser Content */}
      <div className="aspect-[4/3] bg-cream-card flex items-center justify-center relative">
        <div className="absolute inset-0 p-12 flex flex-col justify-center">
          {/* Mockup content placeholder */}
          <div className="space-y-4">
            <div className="h-12 bg-cream-dark rounded w-3/4" />
            <div className="h-6 bg-cream-dark rounded w-1/2" />
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="h-24 bg-cream-dark rounded" />
              <div className="h-24 bg-cream-dark rounded" />
              <div className="h-24 bg-cream-dark rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PillBadge = ({ text }) => (
    <div className="inline-block bg-dark text-cream px-4 py-2 rounded-full text-xs font-medium font-inter">
      {text}
    </div>
  );

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-cream">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Browser - moves with scroll */}
          <motion.div
            style={{ x: browserX }}
            className="flex justify-center"
          >
            <BrowserMockup />
          </motion.div>

          {/* Content 1 - 0% scroll */}
          <motion.div
            style={{ opacity: content1Opacity }}
            className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 max-w-md space-y-6"
          >
            <h2 className="font-playfair font-bold text-4xl lg:text-6xl text-dark leading-tight">
              Stunning<br />Websites
            </h2>
            <p className="text-muted font-inter text-lg">
              That make your business look world class
            </p>
            <div className="flex flex-wrap gap-3">
              <PillBadge text="Mobile Ready" />
              <PillBadge text="Fast" />
              <PillBadge text="Premium" />
            </div>
          </motion.div>

          {/* Content 2 - 33% scroll */}
          <motion.div
            style={{ opacity: content2Opacity }}
            className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 max-w-md space-y-6"
          >
            <h2 className="font-playfair font-bold text-4xl lg:text-6xl text-dark leading-tight">
              Delivered in<br />7-10 Days
            </h2>
            <p className="text-muted font-inter text-lg">
              Quick turnaround, zero compromise on quality
            </p>
            <div className="flex flex-wrap gap-3">
              <PillBadge text="Quick Delivery" />
              <PillBadge text="Revisions Included" />
            </div>
          </motion.div>

          {/* Content 3 - 66% scroll */}
          <motion.div
            style={{ opacity: content3Opacity }}
            className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 max-w-md space-y-6"
          >
            <h2 className="font-playfair font-bold text-4xl lg:text-6xl text-dark leading-tight">
              1 Year Free<br />Hosting
            </h2>
            <p className="text-muted font-inter text-lg">
              We handle everything, you focus on business
            </p>
            <div className="flex flex-wrap gap-3">
              <PillBadge text="Free Hosting" />
              <PillBadge text="Free SSL" />
              <PillBadge text="Free Domain" />
            </div>
          </motion.div>

          {/* Content 4 - 100% scroll */}
          <motion.div
            style={{ opacity: content4Opacity }}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-2xl space-y-6 text-center"
          >
            <h2 className="font-playfair font-bold text-4xl lg:text-6xl text-dark leading-tight">
              Your Business.<br />Online. Growing.
            </h2>
            <p className="text-muted font-inter text-lg">
              Join 50+ businesses already growing with Pixvon
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
