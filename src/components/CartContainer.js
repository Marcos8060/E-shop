import React, { useEffect, useState } from "react";
import "./css/cartcontainer.css";
import axios from "axios";
import CartItem from "./CartItem";

function CartContainer() {

  return (
    <>
      <div className="app__cartContainer">
        <div className="container-fluid">
          <h3 className="text-center">Featured Products</h3>
          <p className="text-center">
            Amazing products added recently in our catalogue
          </p>
          <div className="row">
            <div className="col-md-3 filters">
              <h3 className="text-center">Select by Category</h3>
              <ul className="list-group">
                <li className="list-group-item">Ladies</li>
                <li className="list-group-item">Gents</li>
                <li className="list-group-item">Descending</li>
                <li className="list-group-item">Ascending</li>
              </ul>
            </div>
            <div className="col-md-3 product text-center">
              <CartItem />
            </div>
            <div className="col-md-3 text-center">
              <CartItem />
            </div>
            <div className="col-md-3 text-center">
              <CartItem />
            </div>
            <div className="col-md-3 text-center">
              <CartItem />
            </div>
            <div className="col-md-3 text-center">
              <CartItem />
            </div>
            <div className="col-md-3 text-center">
              <CartItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
