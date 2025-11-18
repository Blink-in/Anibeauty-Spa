import React from "react";
import "./SectionV.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import facialcare1 from "../../../assets/face1.jpg";
import facialcare2 from "../../../assets/face2.jpg";
import facialcare3 from "../../../assets/face3.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SectionV = () => {
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
    <div className="secVdiv">
       <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}>
      <span className="facialcare">Facial Care</span>
      <p className="sec2para">
        {" "}
        <br />
        With our intensive facial treatment, we give the best to our customers
        <br />
        to help boost their confidence and skin.
        <br />
      </p>
      <div className="gal1">
        <img className="facialcare1" src={facialcare1} />
        <img className="facialcare1" src={facialcare2} />
        <img className="facialcare1" src={facialcare3} />
      </div>
      <p className="massage">
        Our facial care service ranges from <span>$10</span> to <span>$60</span>{" "}
        depending on client preference
      </p>
      </motion.div>
    </div>
  );
};

export default SectionV;
