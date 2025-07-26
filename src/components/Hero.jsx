import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      if (heroRef.current) {
        heroRef.current.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="glow-overlay"></div>

      <motion.div
        ref={heroRef}
        className="hero-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="hero-title">SARGA Perfumes</h1>
        <p className="hero-tagline">Unleash your essence. <br />Smell like royalty.</p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Collection
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
