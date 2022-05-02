import React from "react";
import bike from "../images/bike1.png";
import Navbar from "./Navbar";
import "./css/hero.css";

function Hero() {
  return (
    <>
      <div className="app__hero">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="intro">50% off for Your First Shopping</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus aliquam porro ratione esse culpa ipsum
                exercitationem quos laborum. Labore, cumque.
              </p>
              <button className="btn1">Shop Now</button>
            </div>
            <div className="col-md-7">
              <img className="img-fluid" src={bike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
