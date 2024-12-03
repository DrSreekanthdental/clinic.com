import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion'; // Import framer-motion for animation
import googleMapsLogo from '../Image/google-maps-logo.png'; // Import the logo (add the image to your project)

function Footer() {
  // Define animation variants
  const footerVariants = {
    initial: { opacity: 0, y: 50 },  // Start from below and invisible
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },  // End in original position
  };

  return (
    <motion.footer
      className="footer"
      initial="initial"
      whileInView="animate"
      variants={footerVariants}  // Apply animation variants
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when the footer is in view
    >
      <p>Dr.Sreekanth Dental Clinic</p><p>
        skskdentalcare@gmail.com</p>
      <p>
       
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Dr+S+K+Sreekanth+Dental+Clinic+123%2F94+Santhome+High+Road+Santhome+Raja+Annamalai+Puram+Chennai-600+028+TamilNadu+India" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center',textAlign:'center' }} // Styling for logo and text alignment
          title="Click to view the location on Google Maps" // Tooltip
          className='map'
        >
          <img 
            src={googleMapsLogo} 
            alt="Google Maps" 
            style={{ width: '100px', height: '100px', marginLeft: '8px' ,alignItems:'center',textAlign:'center'}} // Style the logo
          />
                    <span>Dr.SREEKANTH DENTAL CLINIC</span>

        </a>
      </p>
    </motion.footer>
  );
}

export default Footer;
