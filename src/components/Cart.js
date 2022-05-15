import React from "react";
import "./css/cart.css";
import { GlobalContext } from "../context";
import DeleteIcon from "@material-ui/icons/Delete";



function Cart() {
  const { state:{cart},dispatch}  = GlobalContext();
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
                {cart.map((item) =>(
                  <tbody>
                  <tr className="cart__items">
                    <th scope="row">
                      <img className="img-fluid cart__img" src={item.image} alt="" />
                      <span>{item.name}</span>
                    </th>
                    <td className="fw-normal data">$ {item.price}</td>
                    <td className="fw-normal">
                    <div>
                      <button className="increaseCartBtn">-</button>
                      <button className="increaseCartBtn">0</button>
                      <button className="increaseCartBtn">+</button>
                    </div>
                    </td>
                    <td className="fw-normal">$ 7900</td>
                    <td className="fw-normal">
                      <DeleteIcon 
                      onClick={()=>{
                        dispatch({
                          type: 'REMOVE',
                          payload: item
                        })
                      }}
                      className="delete" />
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
