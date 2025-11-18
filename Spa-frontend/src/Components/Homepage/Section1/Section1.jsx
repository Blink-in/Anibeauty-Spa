import React from "react";
import "./Section1.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image2 from "../../../assets/p1.avif"
const Section1 = () => {
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
    <div className="sec3">
      <div className="sec3n1">
        <motion.img className="image2"
         ref={ref}
         initial="hidden"
         animate={controls}
         variants={variants}
         src={image2} />
        <motion.div className="sec3div1"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants2}
        >
          <span className="span3">MEET YOUR AESTHETIC EXPERT</span>
          <br />
          <br />
          <h1 className="head2">
            Passionate about your beauty
            <br /> and confidence
            <br />
          </h1>
          <br />
          <span className="span4">
            This is Mrs Grace Justin, she's a beauty expert<br /> and
             a very talented doctor.
            <br />
            She handles mainly female body care and <br />
            beauty care-giving
            to help women gain<br /> more confidence in the society
          </span>
          <br />
          <br />
          <button>Learn More About her</button>
          <br />
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
