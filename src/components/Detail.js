import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./css/detail.css";
import { GlobalContext } from "../context";

function Detail() {
  const {
    state: { cart },
    dispatch,
  } = GlobalContext();
  console.log(cart);
  const { id } = useParams();
  const [item, setItem] = useState([]);

  const url = `http://127.0.0.1:8000/api/items/${id}/`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <div className="app__detail">
      <div className="container">
        <div className="row detail__product">
          <div className="col-md-6">
            <img className="img-fluid" src={item.image} alt={item.name} />
          </div>
          <div className="col-md-6">
            <h1 className="fw-bold item__name">{item.name}</h1>
            <p className="price">$ {item.price}</p>
            <p className="text-uppercase text-muted">
              Category: {item.category}
            </p>
            <p className="text-uppercase text-muted">Stock: {item.stock}</p>
            <p className="text-uppercase text-muted">
              Delivery: {item.delivery}
            </p>
            <hr />
            <p className="text-muted">{item.description}</p>
            <hr />
            <div className="item__footer">
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
                  class="form-select"
                  aria-label=".form-select-sm example"
                >
                  <option selected>Select quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                {/* <button className="increaseBtn">-</button>
                <button className="increaseBtn">0</button>
                <button className="increaseBtn">+</button> */}
              </div>
              <div>
                {cart.some((p) => p.id === item.id) ? (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE",
                        payload: item,
                      });
                    }}
                    className="removeBtn"
                  >
                    Remove from cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      });
                    }}
                    className="addBtn"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
