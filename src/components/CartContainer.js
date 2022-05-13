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
              <h3 className="text-center">Filter Products</h3>
              <form>
                  <label htmlFor="ascending" className="form-label m-2">
                    Ascending
                  </label>
                  <input type="radio" className="" />
                <br />
                  <label htmlFor="descending" className="form-label m-2">
                    Descending
                  </label>
                  <input type="radio" className="" />
                <br />
                  <label htmlFor="ladies" className="form-label m-2">
                    Ladies
                  </label>
                  <input type="checkbox" className="" />
                <br />
                  <label htmlFor="men" className="form-label m-2">
                    Men
                  </label>
                  <input type="checkbox" className="" />
              </form>
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
