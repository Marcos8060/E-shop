import React from "react";
import "./css/cartcontainer.css";
import { useGlobalContext } from "../context";

function CartContainer() {
  const { cart } = useGlobalContext()

  return (
    <>
      <div className="app__cartContainer">
        <div className="container-fluid">
          <div className="row">
            {cart.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card">
                  <img className="img-fluid item_img" src={item.image} alt="" />
                  <div className="d-flex justify-content-around">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                  <a href={"detail/" + item.id}><button className="btn2">View Item</button></a>
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
