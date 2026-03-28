import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ScrollBrowser from '../components/ScrollBrowser';
import Stats from '../components/Stats';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <ScrollBrowser />
      <Stats />
      <HowItWorks />
      <Industries />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;