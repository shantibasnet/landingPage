import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="main_container">
        <div className="logo_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1200px-Wendy%27s_full_logo_2012.svg.png"
            img
            height="50px"
          />
          <div className="container1">
            <h1>Welcome to Wendy's</h1>
            <h3>People's favorite choices</h3>
          </div>

          <div className="container2">
            <h3>Home</h3>
            <h3>Menu</h3>
            <h3>About Us</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
