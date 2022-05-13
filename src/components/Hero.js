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
              <LocalShippingIcon className="ship" />
              <span className="m-2">Free shipping and return</span>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="iconItem">
              <AttachMoneyIcon className="ship" />
              <span className="m-2">Money back guarantee</span>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="iconItem">
              <PhoneCallbackIcon className="ship" />
              <span className="m-2">Online support 24/7</span>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="iconItem">
                <HttpsIcon className="ship" />
                <span className="m-2">Secure payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
