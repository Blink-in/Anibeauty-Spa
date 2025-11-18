import React from "react";
import Hero from "./Homepage/Hero/Hero";
import Section1 from "./Homepage/Section1/Section1";
import Herosec from "./Homepage/Herosec/Herosec";
import Section2 from "./Homepage/Section2/Section2";
import Section3 from "./Homepage/Section3/Section3";
import Footer from "./Footer/Footer";
const Page1Render = () => {
  return (
    <div>
      <Hero />
      <Herosec />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Page1Render;
