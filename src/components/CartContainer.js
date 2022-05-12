import React, { useEffect, useState } from "react";
import "./css/cartcontainer.css";
import axios from "axios";
import CartItem from "./CartItem";
import Skeleton from 'react-loading-skeleton'


const url = "https://marcos-shop.herokuapp.com/api/items/";
function CartContainer({ handleClick }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setItems(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
       <div className="text-center py-4">
       <div
        className="spinner-border"
        role="status"
        >
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
          <div className="row">
            {items.map((item) => (
              <div className="col-md-3 text-center" key={item.id}>
                <div className="card">
                  <CartItem key={item.id} item={item} handleClick={handleClick} />
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
