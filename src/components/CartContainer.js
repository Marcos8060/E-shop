import React, { useEffect, useState } from "react";
import "./css/cartcontainer.css";
import axios from "axios";
import CartItem from "./CartItem";

const url = "https://marcos-shop.herokuapp.com/api/items/";
function CartContainer({ handleClick }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
      });
  }, []);

  if (loading) {
    return (
      <>
        <div className="text-center py-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        </div>
      </>
    );
  }

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
