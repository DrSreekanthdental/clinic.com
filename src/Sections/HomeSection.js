import React from 'react';
import './Sections.css'; // Ensure your CSS file is properly imported

import Appa4 from '../Image/Appa4.png';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function HomeSection() {
  const handleButtonClick = () => {
    window.open('https://wa.me/9381993739?text=I%20need%20an%20Appointment%20for%20a%20Dental%20Treatment.%20Can%20I%20have%20your%20Assistance?', '_blank');
  };

  return (
    <motion.div className="home-section" variants={textVariants} initial="initial" animate="animate">
      <div className="content-wrapper">
        {/* Left Side: Image */}
        <motion.img className="hero" src={Appa4} alt="Appa4" variants={textVariants} />
        {/* Right Side: Text and Button */}
        <motion.div className="text-wrapper" variants={textVariants}>
          <motion.h1 variants={textVariants}>
        
           

Dr Sreekanth's Dental Clinic</motion.h1>

          <motion.p variants={textVariants}>We believe in fostering long-term patient relationships, built on trust, open communication, and education, empowering individuals to take an active role in maintaining their oral health.</motion.p>
          <motion.p variants={textVariants}>We offer advanced dental care with specialists in orthodontics, surgery, periodontics, prosthodontics, and more.</motion.p>

  <motion.button
            variants={textVariants}
            className="cta-button"
            onClick={handleButtonClick}
            aria-label="Get Started"
          >
            Message us
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomeSection;
