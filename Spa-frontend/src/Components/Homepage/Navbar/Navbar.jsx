import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
    <nav>
      <div className="name">
      Anibeauty Spa
      <span></span>
      </div>
      <div className="lists">
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/Services" className="services">
          <li>Services</li>
        </Link>
        <Link to="/booking" className="booking">
          {" "}
          <li>Booking</li>
        </Link>
      </div>
    
    </nav>
    <br /> <br />
  </div>
  );
};

export default Navbar;
