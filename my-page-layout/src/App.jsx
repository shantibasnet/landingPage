
import React, { useEffect, useState } from "react";
import Header from "./component/header";

import Advertisement from "./component/advertisement";
import "./App.css";
import Hero from "./component/hero";


function App() {
  const [showAdvertisement, setshowAdvertisement] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setshowAdvertisement(true);
    }, 1000);
  }, []);

  return (

    <div className="new_container">
      <Header />
      <Hero title="Every fast food in one place" />
      <Advertisement show={showAdvertisement} setShow={setshowAdvertisement} />

    </div>
  );
}

export default App;
