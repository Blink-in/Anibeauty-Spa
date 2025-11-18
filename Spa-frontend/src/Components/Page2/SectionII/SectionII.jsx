import React from "react";
import "./SectionII.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import massage1 from "../../../assets/massage3.jpg";
import massage2 from "../../../assets/massage2.jpg";
import massage3 from "../../../assets/istockphoto-492676582-612x612.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SectionII = () => {
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
      hidden: { opacity: 0, y:20 },
      visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
    };
   
  return (
    <div className="secIIdiv">
    <motion.div 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}>
      <h3 className="sec2h3">OUR SERVICES</h3>
      <br />
      <br />

      <span className="bodymassage">Full Body Massage</span>

      <p className="sec2para">
        {" "}
        <br />
        We offer the best body massages to all our clients
        <br />
        as they're our main focus with afforadble rates too.
        <br />
      </p>
      <div className="gal1">
        <img className="massage1" src={massage1} />
        <img className="massage2" src={massage2} />
        <img className="massage3" src={massage3} />
      </div>
      <p className="massage">
        Our body massage service ranges from <span>$20</span> to{" "}
        <span>$95</span> depending on client preference
      </p>
    </motion.div>
    </div>
  );
};

export default SectionII;
