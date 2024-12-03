import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sections.css';
import Clinic from '../Image/Clinic.jpg'; // Image for Clinic
import Clinic1 from '../Image/Clinic1.jpg'; // Image for Clinic
import Clinic2 from '../Image/Clinic2.jpg'; // Image for Clinic



function AboutSection() {
  // Content for the sections (image + text)
  const slides = [
    {
      image: Clinic,
      text: `Dr. S.K. Sreekanth's dental practice began in 1995 under the name KALKI's DENTAL CLINIC on Thandavarayan Street, Santhome, Chennai. The clinic was named in honor of his beloved parents, Kalyani and Krishnamurthy. Over the years, the clinic evolved and was later renamed KSK DENTAL CLINIC, as a tribute to his father, K.S. Krishnamurthy (KSK), and mother, Kalyani. In 2021, the clinic underwent another rebranding to Dr. S.K. Sreekanth Dental Clinic, reflecting Dr. Sreekanth's personal commitment to excellence in dental care.

      Since its inception in 1995, the clinic has operated with the core principle of “Service to Humanity is Service to God”. Dr. Sreekanth and his team are deeply committed to making quality dental care accessible to all, with a special focus on offering affordable treatment. They understand the importance of providing dental services to those in need, and as part of their mission, they offer free services to the extremely needy and underprivileged.
      
      At Dr. S.K. Sreekanth Dental Clinic, human values take precedence over financial gain. The clinic is dedicated to serving the community with integrity, compassion, and a strong ethical commitment. Patients can rely on the clinic not just for top-notch treatment, but also for the genuine care and respect they receive throughout their dental journey..`,
    },
    {
      image: Clinic1,
      text: `The Clinic consultation area is Fully air-conditioned, sterile and pollution-free. We use
       DISPOSIBLES whereever applicable. We sterlize all our instruments with AUTOCLAVE. Dr.S.K.Sreekanth 
       is providing his own personal Mobile number to all his patients and ensure that he attends calls round
        the clock to provide confidence and secure feelng for all his patients that the Doctor is available
         anytime for any emergency to serve them.
      Dr.S.K.Sreekanth is attached to various Hospitals in Chennai and for Major Surgical Procedures 
      requiring General Anaesthesia, he admits his patients in those Hospitals. 
      We do a lot of Dental Awareness and Free Check-up Programmes for Public, School Children and Corporates.
       Our main aim is to Prevent Dental Problems and Correct them at earlier stages. We provide better smile 
       and improve confidence of the younger generation. We rehabilitate and provide new life for the elderly. 
         We always educate and make our patients understand why the treatment is necessary for them and ensure
          that they are fully satisfied before, during and after the treatment. We also remind our patients about 
          their routine check-ups for future maintenence `,
    },
    {
      image: Clinic2,
      text: `At Dr. S.K. Sreekanth Dental Clinic, we are dedicated to providing high-quality, comprehensive dental care to every patient. Our clinic is built on a foundation of expert knowledge, advanced technology, and a commitment to patient well-being. With a team of experienced specialists across various branches of dentistry, including Orthodontics, Oral and Maxillofacial Surgery, Periodontics, Prosthodontics, Pedodontics, and Endodontics, we are equipped to offer a wide range of treatments that are customized to meet the unique needs of each individual.

      We understand that every patient has specific concerns, which is why we provide personalized care and attention, ensuring that you feel heard, understood, and comfortable throughout your visit. Our clinic is equipped with the latest in dental technology, including cutting-edge diagnostic tools, high-precision instruments, and state-of-the-art treatment equipment. This allows us to deliver the most accurate, efficient, and effective treatments available, while maintaining the highest standards of safety and hygiene.
      
      Whether you're visiting for a routine check-up, advanced restorative treatments, or specialized dental procedures, our team is committed to ensuring that your experience is as comfortable and stress-free as possible. We take great pride in making dental care accessible and affordable, and we strive to create a positive, supportive environment where our patients feel confident in their care and treatment plan.`,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop through slides
    }, 7000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [slides.length]);

  // Animation Variants for Framer Motion
  const slideVariants = {
    initial: { opacity: 0, x: 100 }, // Start offscreen (right)
    animate: { opacity: 1, x: 0, transition: { duration: 1 } }, // Fade in and slide in
    exit: { opacity: 0, x: -100, transition: { duration: 1 } }, // Fade out and slide out (left)
  };

  return (
    <section id="about" className="section about-section">
      <h1 className="ab">About Us</h1>

      <div className="about-content-wrapper">
        <AnimatePresence mode="wait">
          {/* Image */}
          <motion.div
            key={slides[currentSlide].image} // Unique key for each slide
            className="about-image"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {/* Text */}
          <motion.div
            key={slides[currentSlide].text} // Unique key for each slide
            className="about-text"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p>{slides[currentSlide].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AboutSection;
