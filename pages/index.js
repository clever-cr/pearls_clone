import React from "react";
import Awards from "../components/Awards";
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
    </div>
  );
};

export default index;
