
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="main_container">
        <div className="logo_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Wendy%27s_full_logo_2012.svg/1200px-Wendy%27s_full_logo_2012.svg.png"
            img
            height="90px"
          />
          <div className="container1">
            <h1>Welcome to Wendy's</h1>
            <h3>People's favorite choices</h3>
          </div>
        </div>

        <ul className="links_container">
          <li className="links active">Home</li>
          <li className="links">Menu</li>
          <li className="links">About Us</li>
        </ul>
        <div className="log">
          <button>Log Out</button>
        </div>
      </div>
    </header>
  );
};


export default Header;
