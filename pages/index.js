import React from "react";
import Awards from "../components/Awards";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Innovation from "../components/Innovation";
import NavBar from "../components/NavBar";
import Partner from "../components/Partner";
import Scale from "../components/Scale";
import Technologies from "../components/Technologies";
import Work from "../components/Work";

const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Partner />
      <Scale />
      <Innovation />
      <Work />
      <Technologies />
      <Awards />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default index;
