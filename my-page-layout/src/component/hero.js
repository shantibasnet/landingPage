import React from "react";

function Hero(props) {
  const heroStyle = {
    backgroundColor: props.backgroundColor,
    padding: "20px",
    textAlign: "center",
    color: "white",
  };

  return (
    <div style={heroStyle}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Hero;
