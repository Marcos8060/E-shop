import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/accessory/";
function Acessory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <div className="app__accessory">
      <div className="container-fluid">
        <div className="row">
          {items.map((item) => (
            <div className="col-md-3 text-center mb-4" key={item.id}>
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
