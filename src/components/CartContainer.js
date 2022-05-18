import React, { useEffect, useState } from "react";
import "./css/cartcontainer.css";
import CartItem from "./CartItem";
import { GlobalContext } from "../context";

function CartContainer() {
  const { loading,products,productState:{sort}} = GlobalContext();

  const transformProducts = () =>{
    let sortedProducts = products

    if(sort){
      sortedProducts = sortedProducts.sort((a,b) =>{
        return sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      })
    }
    return sortedProducts;
  }

  if(loading){
    return(
      <div className="loading">
        Loading...
      </div>
    )
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
            {transformProducts().map((item) =>(
              <div className="col-md-3 product text-center" key={item.id}>
               <CartItem  item={item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
