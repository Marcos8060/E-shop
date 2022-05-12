import { IndeterminateCheckBox } from "@material-ui/icons";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import "./css/cart.css";
import { useEffect, useState } from "react";

function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  if (cart.legth === 0) {
    return <div>Your Cart is empty</div>;
  }
  return (
    <>
      <div className="app__cart">
        <div className="container-fluid">
          <div className="row">
            {cart.map((item) => (
              <div className="col-md-6 single__item" key={item.id}>
                <div className="cart__item">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-3 text-center">
                      <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-4 text-center">
                          <p className="cart__name">{item.name}</p>
                          <p className="cart-price">$ {item.price}</p>
                          <small className="text-muted">
                            {item.price} x {item.amount}
                          </small>
                        </div>
                        <div className="col-md-4 text-center">
                          <AddBoxIcon
                            onClick={() => handleChange(item, 1)}
                            className="plus"
                          />
                          <h5 className="cart__quantity">{item.amount}</h5>
                          <IndeterminateCheckBox
                            onClick={() => handleChange(item, -1)}
                            className="minus"
                          />
                        </div>
                        <div className="col-md-4 text-center">
                          <DeleteIcon
                            onClick={() => handleRemove(item.id)}
                            className="remove"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <h4 className="text-center">Total Cost: $ {price}</h4>
        </div>
      </div>
    </>
  );
}

export default Cart;
