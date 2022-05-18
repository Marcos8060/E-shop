import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";

const url = "http://127.0.0.1:8000/api/accessory/";
function Acessory() {
  const [items, setItems] = useState([]);
  const { loading } = GlobalContext();

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data);
    });
  }, []);

  if(loading){
    return (
      <div className="loading3">
        Loading...
      </div>
    )
  }
  return (
    <div className="app__accessory">
      <div className="container">
        <div className="row">
            <h3 className="accessory">Bycicle Accessories</h3>
          {items.map((item) => (
            <div className="col-md-3 text-center py-4" key={item.id}>
              <img className="img-fluid last__img" src={item.image} alt="" />
              <h5 className="fw-bolder">{item.name}</h5>
              <span className="price">$ {item.price}</span>
              <Link
                to={`accessory/${item.id}/`}
                className="buyBtn text-decoration-none"
              >
                Buy now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Acessory;
