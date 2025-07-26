import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <motion.div
        className="intro-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2><span className="brand">SARGA</span> Perfumes</h2>
        <p className="tagline">Discover the World of SARGA Perfumes.</p>
        <p className="subtext">Elegance bottled with passion, just for you.</p>
      </motion.div>

      <motion.div
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <button onClick={() => console.log('Instagram clicked')} aria-label="Instagram">
          <FaInstagram />
        </button>
        <button onClick={() => console.log('YouTube clicked')} aria-label="YouTube">
          <FaYoutube />
        </button>
        <button onClick={() => console.log('Twitter clicked')} aria-label="Twitter">
          <FaTwitter />
        </button>
      </motion.div>

      <div className="newsletter-cta">
        <h3>Stay in the loop</h3>
        <p>Subscribe for latest drops, deals, and exclusive scents.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Home;