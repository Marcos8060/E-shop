import React from "react";
import denim from "../images/denim.png";
import "./css/detail.css";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

function Detail() {
  return (
    <>
      <div className="app__detail">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <img className="img-fluid detail-img" src={denim} alt="" />
            </div>
            <div className="col-md-8">
              <h3 className="title">Denim Jacket</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique doloribus in at ullam ducimus!
              </p>
              <span>Category: Clothing</span>
              <p>Rated:  <StarIcon className="star"/> <StarIcon className="star"/> <StarIcon className="star"/> <StarIcon className="star"/> <StarHalfIcon className="star"/></p>
              <h3 className="price">$300</h3>
              <p>Stock available</p>
              <button className="btn3">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
