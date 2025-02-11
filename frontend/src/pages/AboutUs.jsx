import Biography from "../components/Biography";
import Hero from "../components/Hero";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Doctors Hospital"}
        imageUrl={"/about.jpg"}
      />
      <Biography imageUrl={"/whowhere.jpg"} />
    </>
  );
};

export default AboutUs;
