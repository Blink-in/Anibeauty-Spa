import React from "react";
import "./SectionIII.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import haircare1 from "../../../assets/Malehair1.jpg";
import haircare2 from "../../../assets/femalehair2.jpg";
import haircare3 from "../../../assets/femalehair1.jpg";
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
    <div className="secIIIdiv">
       <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}>
      <span className="haircare">Hair Care</span>
      <p className="sec2para">
        {" "}
        <br />
        Our service includes hair-wash and cuts for all ages
        <br />
        as well as hair varietyof hair treatment procedures.
        <br />
      </p>
      <div className="gal1">
        <img className="haircare1" src={haircare1} />
        <img className="haircare2" src={haircare2} />
        <img className="haircare3" src={haircare3} />
      </div>
      <p className="massage">
        Our hair care service ranges from <span>$15</span> to <span>$75</span>{" "}
        depending on client preference
      </p>
      </motion.div>
    </div>
  );
};

export default SectionII;
