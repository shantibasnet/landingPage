import React from "react";
import "./hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="hero">
      <h2>{title}</h2>
    </section>
  );
};

export default Hero;
