import React from "react";
import "./Hero.css";
import image1 from "../../../assets/p2.avif";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";



const Hero = () => {

//  const secVariant = {
//   visible:{opacity:1,  transition:{duration:1}},
//   hidden:{opacity:0}
//  }
// const Sec = () =>{

//  const contr = useAnimation();
//   const [ref, inView] = useInView();

//   React.useEffect(() => {
//     if (inView) {
//       contr.start("visible");
//     } 
//   }, [contr, inView])
 
// }


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
            From a smooth skin to a sculpend body, our expert team in Sudbury
            <br /> offers a veriety of treatments to improve your body
          </span>
          <br />
          <br />
         <Link to="/booking"> <button className="button1">Book An Appointment</button></Link>
          <br />
        </motion.div>
        < motion.img className="image1"
         ref={ref}
         initial="hidden"
         animate={controls}
         variants={variants2}
         src={image1} />
       
    </div>
    </div>
  
  );
};

export default Hero;
