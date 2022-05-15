import { IndeterminateCheckBox } from "@material-ui/icons";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./css/cart.css";
import bike from "../images/bike3.png";

function Cart() {
  return (
    <>
      <div className="app__cart">
        <div className="container-fluid">
          <h1 className="text-center">Cart</h1>
          <p className="text-center mb-4">Your shopping cart</p>
          <div className="row">
            <div className="col-md-8">
              <table class="table table-bordered text-center">
                <thead class="schema-names">
                  <tr className="heads">
                    <th scope="col" class="fw-bold">
                      PRODUCT NAME
                    </th>
                    <th scope="col" class="fw-bold">
                      PRICE
                    </th>
                    <th scope="col" class="fw-bold">
                      QUANTITY
                    </th>
                    <th scope="col" class="fw-bold">
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cart__items">
                    <th scope="row">
                      <img className="img-fluid cart__img" src={bike} alt="" />
                      <span>Diamond Black</span>
                    </th>
                    <td class="fw-normal data">$ 2,800</td>
                    <td class="fw-normal">
                    <div>
                      <button className="increaseCartBtn">-</button>
                      <button className="increaseCartBtn">0</button>
                      <button className="increaseCartBtn">+</button>
                    </div>
                    </td>
                    <td class="fw-normal">$ 7900</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="cart__items">
                    <th scope="row">
                      <img className="img-fluid cart__img" src={bike} alt="" />
                      <span>Diamond Black</span>
                    </th>
                    <td class="fw-normal data">$ 2,800</td>
                    <td class="fw-normal">
                    <div>
                      <button className="increaseCartBtn">-</button>
                      <button className="increaseCartBtn">0</button>
                      <button className="increaseCartBtn">+</button>
                    </div>
                    </td>
                    <td class="fw-normal">$ 7900</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="cart__items">
                    <th scope="row">
                      <img className="img-fluid cart__img" src={bike} alt="" />
                      <span>Diamond Black</span>
                    </th>
                    <td class="fw-normal data">$ 2,800</td>
                    <td class="fw-normal">
                    <div>
                      <button className="increaseCartBtn">-</button>
                      <button className="increaseCartBtn">0</button>
                      <button className="increaseCartBtn">+</button>
                    </div>
                    </td>
                    <td class="fw-normal">$ 7900</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="text-center">CART TOTALS</h5>
                <hr />
                <div className="totals d-flex justify-content-around align-items-center">
                <h6>Total</h6>
                <h6 className="total">$ 21,400.00</h6>
                </div>
                <hr />
                <button className="goCheckout">proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
