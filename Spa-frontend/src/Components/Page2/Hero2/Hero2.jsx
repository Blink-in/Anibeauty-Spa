import React from "react";
import "./Hero2.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from "../../../assets/new1.jpg";
const Hero2 = () => {
   const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    const variants = {
      hidden: { opacity: 0, x:-50 },
      visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
    };
    const variants2 = {
      hidden: { opacity: 0, x:50 },
      visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
    };
  
  return (
    <div className="hero">
      <div className="overlay">
        <motion.div className="inner1"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}>
          <span className="span1">ELEVATE YOUR BEAUTY AND CONFIDENCE</span>
          <br />
          <br />
          <h1 className="head1">
            Advanced Aesthetic
            <br />
            Solution in sudbury
          </h1>
          <br />
          <span className="span2">
            Discover a variety of our top notch services created
            <br />
            specially to improve you and your body
          </span>
          <br />
          <br />
          <button className="button1">Book An Appointment</button>
          <br />
        </motion.div>
        <motion.img className="image2"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants2} src={image1} />
      </div>
    </div>
  );
};

export default Hero2;
