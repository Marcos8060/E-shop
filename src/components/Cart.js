import React, { useState, useEffect } from "react";
import "./css/cart.css";
import { GlobalContext } from "../context";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from 'react-router-dom'

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

  if(cart.length === 0){
    return(
      <h3 className="empty text-center">Your Cart is Empty!</h3>
    )
  }

  return (
    <>
      <div className="app__cart">
        <div className="container-fluid">
          <h1 className="text-center">Cart</h1>
          <p className="text-center mb-4">Your shopping cart</p>
          <div className="row">
            <div className="col-md-8 table-responsive">
              <table className="table table-bordered">
                <thead className="schema-names">
                  <tr className="heads">
                    <th scope="col" className="fw-bold">
                      PRODUCT NAME
                    </th>
                    <th scope="col" className="fw-bold">
                      PRICE
                    </th>
                    <th scope="col" className="fw-bold">
                      QUANTITY
                    </th>
                    <th scope="col" className="fw-bold">
                      TOTAL
                    </th>
                    <th scope="col" className="fw-bold">
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
                            className="form-select"
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
              <Link to='/' className="goCheckout text-decoration-none">Continue shopping</Link>
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
                <Link to='/checkout' className="goCheckout text-decoration-none text-center">proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
