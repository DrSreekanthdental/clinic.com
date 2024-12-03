import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Sections.css';

const textVariants = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

function ServiceSection() {
  const navigate = useNavigate();

  const services = [
    { id: 1, title: 'Gum Health', more: 'Click More...', path: '/service1' },
    { id: 2, title: 'Tooth Conservation', more: 'Click More...', path: '/service2' },
    { id: 3, title: 'Dental and Jaw Surgeries', more: 'Click More...', path: '/service3' },
    { id: 4, title: 'Artificial Teeth', more: 'Click More...', path: '/service4' },
    { id: 5, title: 'Cosmetic Dentistry', more: 'Click More...', path: '/service5' },
    { id: 6, title: 'Pedodontics', more: 'Click More...', path: '/service6' },
    { id: 7, title: 'Full Mouth Rehabilitation', more: 'Click More...', path: '/service7' },
  ];

  return (
    <section id="service" className="section service-section">
      <h1
        className="sc"
        initial="initial"
        whileInView="animate"
        variants={textVariants}
      >
        Our Services
      </h1>

      <motion.div initial="initial" whileInView="animate" variants={textVariants} className="box-container">
        {services.map((service) => (
          <div
            key={service.id}
            className="one"
            onClick={() => navigate(service.path)} // Navigate to the service's page
          >
            <span className="service-title">{service.title}</span>
            <span className="service-more">{service.more}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default ServiceSection;
