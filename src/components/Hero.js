import React from "react";
import bike from "../images/bike2.png";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import HttpsIcon from "@material-ui/icons/Https";
import "./css/hero.css";

function Hero() {
  return (
    <>
      <div className="app__hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-center">
            <div className="content">
            <h1 className="hero__title">Mountain Bicycle</h1>
            <p>Proactively look for obstacles</p>
            <button className="heroBtn">Shop now</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
