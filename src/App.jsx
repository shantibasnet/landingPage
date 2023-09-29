import React from "react";
import Header from "./header";
import Footer from "./footer";
import Hero from "./hero";
import Advertisement from "./advertisement";
import "./App.css";

const App = () => {
  return (
    <div className="new_container">
      <Header />
      <Hero title="Every fast food in one place" />
      <Advertisement />
      <Footer />
    </div>
  );
};

export default App;
