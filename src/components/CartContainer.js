import React, { useEffect, useState } from "react";
import "./css/cartcontainer.css";
import CartItem from "./CartItem";
import { GlobalContext } from "../context";
import LoadingSpin from "react-loading-spin";


function CartContainer() {
  const { loading,products,productState:{sort},productDispatch} = GlobalContext();

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
          <LoadingSpin
            duration="2s"
            width="15px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="100px"
            primaryColor="yellow"
            secondaryColor="#333"
            numberOfRotationsInAnimation={2}
        />
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
              <h3 className="text-center">Filter by Category</h3>
              <ul className="list-group">
                <li 
                style={{ cursor: 'pointer'}}
                onClick={()=>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow"
                  })
                }
                className="list-group-item"
                >Descending price</li>
                <li 
                style={{ cursor: 'pointer'}}
                onClick={()=>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh"
                  })
                }
                className="list-group-item"
                >Ascending price</li>
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
