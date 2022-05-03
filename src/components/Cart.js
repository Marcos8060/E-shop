import { IndeterminateCheckBox } from "@material-ui/icons";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";
import denim from "../images/denim.png";
import "./css/cart.css";

function Cart() {
  return (
    <>
      <div className="app__cart">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="cart__item">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <img className="img-fluid cart__img" src={denim} alt="" />
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4 text-center">
                        <p className="cart__name">Denim jacket</p>
                        <p className="cart-price">$3000</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <AddBoxIcon className="plus" />
                        <h5 className="cart__quantity">0</h5>
                        <IndeterminateCheckBox className="minus" />
                      </div>
                      <div className="col-md-4 text-center">
                        <ClearIcon className="remove" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart__item">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <img className="img-fluid cart__img" src={denim} alt="" />
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4 text-center">
                        <p className="cart__name">Denim jacket</p>
                        <p className="cart-price">$3000</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <AddBoxIcon className="plus" />
                        <h5 className="cart__quantity">0</h5>
                        <IndeterminateCheckBox className="minus" />
                      </div>
                      <div className="col-md-4 text-center">
                        <ClearIcon className="remove" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="d-flex justify-content-between align-items-center checkout">
                      <h6 className="text-muted">Total : </h6>
                      <h6>$3000</h6>
                    </div>
                    <p className="mt-4">Shipping Estimates</p>
                    <form>
                        <textarea name="comment" id="" cols="30" rows="4" className="form-control mb-4" placeholder="shipping comments..."></textarea>
                        <input type="text" className="form-control" placeholder="location..."/>
                        <button className="btn0">Proceed to checkout</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
