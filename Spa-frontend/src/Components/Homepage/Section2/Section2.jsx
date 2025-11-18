import React from "react";
import "./Section2.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import beauty1 from "../../../assets/p5.avif";
import beauty2 from "../../../assets/p8.avif";
import beauty3 from "../../../assets/p13.avif";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Section2 = () => {
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
    hidden: { opacity: 0, x:50 },
    visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
  };
  const variants2 = {
    hidden: { opacity: 0, y:20 },
    visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
  };
  return (
    <div className="sec2div">
   
      <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}>
      <h4 className="sec2h4">OUR SIGNATURE SERVICES</h4>
      <h1 className="sec2h1">
        Tranformative Treatments <br /> Tailored to You{" "}
      </h1>
      <br />
      <span className="facials">Intensive Facial Treatments</span>
      <br />
      <p className="sec2para">
        This game-changing experience combine advanced skincare <br />
        technique with nourishing ingredient giving ur skin
        <br /> that PERFECT tone.
      </p>
      </motion.div>
      <motion.div
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={variants2}>
      <div className="gal1">
        <img className="beaut1" src={beauty1} />
        <img className="beaut2" src={beauty2} />
        <img className="beaut3" src={beauty3} />
      </div>
      <Link to="/Services" className="morelink">
        <button className="more">More Details</button>
      </Link> </motion.div>
    </div>
   
  );
};

export default Section2;
