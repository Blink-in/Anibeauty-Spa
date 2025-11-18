import React from "react";
import "./SectionIV.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import beauty4 from "../../../assets/Cut2.png";
import beauty5 from "../../../assets/Cut3.png";
import { Link } from "react-router-dom";

const SectionIV = () => {
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
      hidden: { opacity: 0, x:-20 },
      visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
    };
    const variants2 = {
      hidden: { opacity: 0, y:20 },
      visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
    };
    const variants3 = {
      hidden: { opacity: 0, x:20 },
      visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
    };
  return (
    <div className="section3">
         
      <motion.img className="beaut4" 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}src={beauty4} />
      <motion.div className="sec3div"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants2}>
        <h5>Our 30% off promo still ongoing</h5>
        <h2>Book Your Appointment Today</h2>
        <br />
        <p>
          We are available 24/7 so, go ahead and book a session with us.
          <br />
          Our customers are our number 1 priority.
        </p>
        <br />
        <button>
          {" "}
          <Link to="/booking" className="booking">
            {" "}
            Book Now{" "}
          </Link>
        </button>
      </motion.div>
      <motion.img className="beaut5"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants3} src={beauty5} />
    </div>
  );
};

export default SectionIV;
