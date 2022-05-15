import React, { useState, useEffect } from "react";
import "./css/cart.css";
import { GlobalContext } from "../context";
import DeleteIcon from "@material-ui/icons/Delete";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = GlobalContext();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <div className="app__cart">
        <div className="container-fluid">
          <h1 className="text-center">Cart</h1>
          <p className="text-center mb-4">Your shopping cart</p>
          <div className="row">
            <div className="col-md-8">
              <table className="table table-bordered text-center">
                <thead className="schema-names">
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
                    <th scope="col" class="fw-bold">
                      ACTION
                    </th>
                  </tr>
                </thead>
                {cart.map((item) => (
                  <tbody>
                    <tr className="cart__items">
                      <th scope="row">
                        <img
                          className="img-fluid cart__img"
                          src={item.image}
                          alt=""
                        />
                        <span>{item.name}</span>
                      </th>
                      <td className="fw-normal data">$ {item.price}</td>
                      <td className="fw-normal">
                        <div>
                          <select
                            onChange={(e) =>
                              dispatch({
                                type: "CHANGE_CART_QTY",
                                payload: {
                                  id: item.id,
                                  qty: e.target.value,
                                },
                              })
                            }
                            class="form-select"
                            aria-label=".form-select-sm example"
                          >
                            <option selected>Select quantity</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                          {/* <button className="increaseCartBtn">-</button>
                      <button className="increaseCartBtn">0</button>
                      <button className="increaseCartBtn">+</button> */}
                        </div>
                      </td>
                      <td className="fw-normal">
                        {item.qty} x {item.price}
                      </td>
                      <td className="fw-normal">
                        <DeleteIcon
                          onClick={() => {
                            dispatch({
                              type: "REMOVE",
                              payload: item,
                            });
                          }}
                          className="delete"
                        />
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="text-center">CART TOTALS</h5>
                <hr />
                <div className="totals d-flex justify-content-around align-items-center">
                  <h6>Total</h6>
                  <h6 className="total">$ {total}</h6>
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
