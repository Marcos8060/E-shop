import React from "react";
import bike from "../images/bike1.png";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="app__hero">
        <Navbar />
        <div className="container">
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
