import React from "react";
import "./SectionVI.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import manicare1 from "../../../assets/mani1.jpg";
import manicare2 from "../../../assets/mani2.jpg";
import manicare3 from "../../../assets/mani3.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SectionVI = () => {
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
    <div className="secVIdiv">
       <motion.div 
                      ref={ref}
                      initial="hidden"
                      animate={controls}
                      variants={variants}>
      <span className="manicare">Manicure & Pedicure</span>
      <p className="sec2para">
        {" "}
        <br />
        We offer quality Manicure and Pedicure services with a variety of
        products
        <br />
        to ensure our customers get the best.
        <br />
      </p>
      <div className="gal1">
        <img className="manicare1" src={manicare1} />
        <img className="manicare1" src={manicare2} />
        <img className="manicare1" src={manicare3} />
      </div>
      <p className="massage">
        Our Manicure and Pedicure service ranges from <span>$13</span> to{" "}
        <span>$45</span> depending on client preference
      </p>
      <Link to="/booking" className="morelink">
        <button className="book6">Book Us</button>
      </Link>
      </motion.div>
    </div>
  );
};

export default SectionVI;
