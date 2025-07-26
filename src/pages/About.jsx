import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-section">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Story</h2>
        <p>
          Founded by <strong>SARAH GUPTA</strong>, SARGA Perfumes is born from a passion for elegance, uniqueness, and timeless aromas. Our founder, an award-winning fragrance influencer, has blended luxury with creativity to redefine modern scent culture.
        </p>
      </motion.div>

      <div className="timeline">
        <motion.div className="timeline-item" whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.5 }}>
          <div className="year">2022</div>
          <div className="desc">Brand Idea conceptualized after a Paris fragrance exhibition.</div>
        </motion.div>
        <motion.div className="timeline-item" whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="year">2023</div>
          <div className="desc">First luxury fragrance line launched – sold out within 3 days.</div>
        </motion.div>
        <motion.div className="timeline-item" whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="year">2024</div>
          <div className="desc">Featured in Vogue India & partnered with 25+ celebrities.</div>
        </motion.div>
      </div>

      <div className="testimonials">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What People Are Saying
        </motion.h3>
        <div className="testimonial-cards">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <p>“Absolutely divine! I’ve never smelled something so royal.”</p>
            <span>- Aanya Verma</span>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <p>“The packaging, the scent, the vibe — pure luxury.”</p>
            <span>- Ritik Sharma</span>
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <p>“Perfect gift for anniversaries and celebrations. Stunning.”</p>
            <span>- Meher Kapoor</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
