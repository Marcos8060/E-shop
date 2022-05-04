import React from "react";
import "./css/cartcontainer.css";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";

function CartContainer() {
  const { cart, loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="app__cartContainer">
        <div className="container-fluid">
          <div className="row">
            {cart.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card">
                 <CartItem key={item.id} {...item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
