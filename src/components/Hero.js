import React from "react";
import bike from "../images/bike1.png";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import HttpsIcon from '@material-ui/icons/Https';
import "./css/hero.css";

function Hero() {
  return (
    <>
      <div className="app__hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 text-center">
              <h1 className="intro">Summer sale <br /> <span className="marketing">30% off.</span></h1>
              <button className="get">
                GET YOURS
              </button>
            </div>
            <div className="col-md-7 text-center">
              <img className="img-fluid" src={bike} alt="" />
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-3 text-center">
              <div className="iconItem">
              <LocalShippingIcon />
              <span className="m-2">FREE SHIPPING</span>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="iconItem">
              <AttachMoneyIcon />
              <span className="m-2">MONEY BACK.</span>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="iconItem">
              <PhoneCallbackIcon />
              <span className="m-2">SUPPORT 24/7</span>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="iconItem">
                <HttpsIcon />
                <span className="m-2">SAFE PAYMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
