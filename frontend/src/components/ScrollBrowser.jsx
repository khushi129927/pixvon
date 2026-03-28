import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Image, Type, Smartphone } from 'lucide-react';

const ScrollBrowser = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Browser movements - stays visible throughout, slight 3D effects
  const browserScale = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.9, 1], [0.92, 1, 1, 1, 0.95]);
  const browserRotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -2, 0, 2, 0]);
  const browserY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -15, 0]);
  
  // Content opacity with progressive reveal - longer visibility windows (each ~25% of scroll)
  const content1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.22, 0.32], [0, 1, 1, 0]);
  const content1Y = useTransform(scrollYProgress, [0, 0.1, 0.32], [30, 0, -15]);
  
  const content2Opacity = useTransform(scrollYProgress, [0.28, 0.35, 0.52, 0.62], [0, 1, 1, 0]);
  const content2Y = useTransform(scrollYProgress, [0.28, 0.35, 0.62], [30, 0, -15]);
  
  const content3Opacity = useTransform(scrollYProgress, [0.58, 0.65, 0.82, 0.90], [0, 1, 1, 0]);
  const content3Y = useTransform(scrollYProgress, [0.58, 0.65, 0.90], [30, 0, -15]);
  
  const content4Opacity = useTransform(scrollYProgress, [0.86, 0.91, 1], [0, 1, 1]);
  const content4Y = useTransform(scrollYProgress, [0.86, 0.91], [30, 0]);
  
  // Background color transition (green → beige)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#F2EDE4', '#E8F0E8', '#F2EDE4', '#EDE7DC']
  );
  
  // Parallax layers - slower movement for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Floating decorative cards
  const floatCard1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const floatCard1Rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  
  const floatCard2Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const floatCard2Rotate = useTransform(scrollYProgress, [0, 1], [0, -12]);

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
      className="relative h-[400vh] overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background parallax layer - decorative blobs */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-warm/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Floating decorative cards - parallax effect */}
        <motion.div
          style={{ 
            y: floatCard1Y,
            rotate: floatCard1Rotate,
          }}
          className="absolute top-20 right-16 w-40 h-40 bg-sage/15 backdrop-blur-sm rounded-3xl shadow-xl pointer-events-none z-0 hidden lg:block"
        />
        <motion.div
          style={{ 
            y: floatCard2Y,
            rotate: floatCard2Rotate,
          }}
          className="absolute bottom-32 left-16 w-48 h-32 bg-orange-warm/15 backdrop-blur-sm rounded-3xl shadow-xl pointer-events-none z-0 hidden lg:block"
        />

        {/* Main Content Grid - Two Column Layout */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content (Higher z-index) - All positioned absolutely to overlap */}
            <div className="relative z-30 min-h-[400px]">
              {/* Content 1 - Fade in from bottom */}
              <motion.div
                style={{ 
                  opacity: content1Opacity,
                  y: content1Y,
                }}
                className="absolute inset-0 space-y-4"
              >
                <div className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-3 py-1.5">
                  <Layout size={14} className="text-sage" />
                  <span className="text-xs font-medium text-dark font-inter">Design</span>
                </div>
                <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-dark leading-tight">
                  Stunning<br />Websites
                </h2>
                <p className="text-muted font-inter text-base">
                  That make your business look world class
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <PillBadge text="Mobile Ready" />
                  <PillBadge text="Fast" />
                  <PillBadge text="Premium" />
                </div>
              </motion.div>

              {/* Content 2 - Fade in from bottom */}
              <motion.div
                style={{ 
                  opacity: content2Opacity,
                  y: content2Y,
                }}
                className="absolute inset-0 space-y-4"
              >
                <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-dark leading-tight">
                  Delivered in<br />7-10 Days
                </h2>
                <p className="text-muted font-inter text-base">
                  Quick turnaround, zero compromise on quality
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <PillBadge text="Quick Delivery" />
                  <PillBadge text="Revisions Included" />
                </div>
              </motion.div>

              {/* Content 3 - Fade in from bottom */}
              <motion.div
                style={{ 
                  opacity: content3Opacity,
                  y: content3Y,
                }}
                className="absolute inset-0 space-y-4"
              >
                <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-dark leading-tight">
                  1 Year Free<br />Hosting
                </h2>
                <p className="text-muted font-inter text-base">
                  We handle everything, you focus on business
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <PillBadge text="Free Hosting" />
                  <PillBadge text="Free SSL" />
                  <PillBadge text="Free Domain" />
                </div>
              </motion.div>

              {/* Content 4 - Final reveal, centered */}
              <motion.div
                style={{ 
                  opacity: content4Opacity,
                  y: content4Y,
                }}
                className="absolute inset-0 space-y-4 text-center lg:text-left"
              >
                <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-dark leading-tight">
                  Your Business.<br />Online. Growing.
                </h2>
                <p className="text-muted font-inter text-base">
                  Join 50+ businesses already growing with Pixvon
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
                  <PillBadge text="50+ Clients" />
                  <PillBadge text="Surat India" />
                  <PillBadge text="Since 2024" />
                </div>
              </motion.div>
            </div>

            {/* Right Column - Browser UI (Lower z-index, subtle 3D effect) */}
            <div className="relative z-10 hidden lg:block">
              <motion.div
                style={{ 
                  scale: browserScale,
                  rotateY: browserRotateY,
                  y: browserY,
                }}
                className="perspective-1000"
              >
                <BrowserMockup />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollBrowser;