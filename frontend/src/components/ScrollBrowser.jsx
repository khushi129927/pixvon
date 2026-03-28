import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Image, Type, Smartphone } from 'lucide-react';

const ScrollBrowser = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Browser movements with smoother easing
  const browserX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 400, -400, 0]);
  const browserScale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.85, 1, 0.95, 1, 0.95, 1]);
  const browserRotate = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, -2, 2, 0]);
  
  // Content opacity with progressive reveal
  const content1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
  const content1Y = useTransform(scrollYProgress, [0, 0.15, 0.3], [40, 0, -40]);
  
  const content2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.6], [0, 1, 1, 0]);
  const content2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.6], [40, 0, -40]);
  
  const content3Opacity = useTransform(scrollYProgress, [0.58, 0.68, 0.88, 0.95], [0, 1, 1, 0]);
  const content3Y = useTransform(scrollYProgress, [0.58, 0.68, 0.95], [40, 0, -40]);
  
  const content4Opacity = useTransform(scrollYProgress, [0.88, 0.95], [0, 1]);
  const content4Y = useTransform(scrollYProgress, [0.88, 0.95], [40, 0]);
  
  // Background color transition (green → beige)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#F2EDE4', '#E8F0E8', '#F2EDE4', '#EDE7DC']
  );
  
  // Parallax layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const BrowserMockup = () => (
    <div className="bg-cream-dark border-2 border-dark/10 rounded-2xl shadow-2xl overflow-hidden w-full max-w-3xl">
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
      
      <div className="aspect-[4/3] bg-gradient-to-br from-cream-card to-cream flex items-center justify-center relative">
        {/* Website preview mockup */}
        <div className="absolute inset-0 p-8">
          {/* Header bar */}
          <div className="h-12 bg-sage/20 rounded-lg mb-4 flex items-center px-4 gap-3">
            <div className="w-20 h-4 bg-sage/40 rounded" />
            <div className="ml-auto flex gap-2">
              <div className="w-12 h-3 bg-sage/40 rounded" />
              <div className="w-12 h-3 bg-sage/40 rounded" />
              <div className="w-12 h-3 bg-sage/40 rounded" />
            </div>
          </div>
          
          {/* Hero section */}
          <div className="h-32 bg-gradient-to-br from-sage/30 to-orange-warm/30 rounded-xl mb-4 p-6 flex items-center justify-between">
            <div className="space-y-2 flex-1">
              <div className="w-3/4 h-6 bg-dark/20 rounded" />
              <div className="w-1/2 h-4 bg-dark/10 rounded" />
              <div className="w-24 h-8 bg-dark/30 rounded-full mt-3" />
            </div>
            <div className="w-24 h-24 bg-dark/10 rounded-2xl flex items-center justify-center">
              <Layout className="w-12 h-12 text-dark/30" />
            </div>
          </div>
          
          {/* Content grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="h-20 bg-orange-warm/20 rounded-lg flex items-center justify-center">
              <Image className="w-8 h-8 text-orange-warm/60" />
            </div>
            <div className="h-20 bg-sage/20 rounded-lg flex items-center justify-center">
              <Type className="w-8 h-8 text-sage/60" />
            </div>
            <div className="h-20 bg-orange-warm/20 rounded-lg flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-orange-warm/60" />
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
    <motion.div 
      ref={containerRef} 
      className="relative h-[400vh]"
      style={{ backgroundColor }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background parallax layer - decorative blobs */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-warm/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Floating background cards */}
          <motion.div
            style={{ y: backgroundY, opacity: 0.4 }}
            className="absolute top-20 right-12 w-32 h-32 bg-sage/20 backdrop-blur-sm rounded-2xl shadow-lg pointer-events-none"
          />
          <motion.div
            style={{ y: backgroundY, opacity: 0.3 }}
            className="absolute bottom-32 left-20 w-40 h-40 bg-orange-warm/20 backdrop-blur-sm rounded-3xl shadow-lg pointer-events-none transform rotate-12"
          />

          {/* Main browser with scale and rotation */}
          <motion.div
            style={{ 
              x: browserX,
              scale: browserScale,
              rotateY: browserRotate,
            }}
            className="flex justify-center relative z-10"
          >
            <BrowserMockup />
          </motion.div>

          {/* Foreground floating cards */}
          <motion.div
            style={{ y: foregroundY, opacity: 0.5 }}
            className="absolute top-1/3 left-8 w-24 h-24 bg-cream/80 backdrop-blur-md border border-sage/30 rounded-xl shadow-2xl pointer-events-none"
          />
          <motion.div
            style={{ y: foregroundY, opacity: 0.5 }}
            className="absolute bottom-1/3 right-16 w-28 h-28 bg-cream/80 backdrop-blur-md border border-orange-warm/30 rounded-2xl shadow-2xl pointer-events-none transform -rotate-6"
          />

          {/* Content 1 - Progressive reveal with Y movement */}
          <motion.div
            style={{ 
              opacity: content1Opacity,
              y: content1Y,
            }}
            className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 max-w-md space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-3 py-1.5 mb-2"
            >
              <Layout size={14} className="text-sage" />
              <span className="text-xs font-medium text-dark font-inter">Design</span>
            </motion.div>
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

          {/* Content 2 - Progressive reveal */}
          <motion.div
            style={{ 
              opacity: content2Opacity,
              y: content2Y,
            }}
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

          {/* Content 3 - Progressive reveal */}
          <motion.div
            style={{ 
              opacity: content3Opacity,
              y: content3Y,
            }}
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

          {/* Content 4 - Final reveal */}
          <motion.div
            style={{ 
              opacity: content4Opacity,
              y: content4Y,
            }}
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
    </motion.div>
  );
};

export default ScrollBrowser;