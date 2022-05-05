import React, { useEffect, useState } from "react";
import denim from "../images/denim.png";
import "./css/soon.css";
import axios from "axios";

const url = `http://127.0.0.1:8000/api/soon/`;
function Soon() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div className="app__soon">
        <div className="container-fluid">
          <h4 className="coming">Coming Soon</h4>
          <div className="row">
            {items.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card">
                  <img className="img-fluid item_img" src={item.image} alt="" />
                  <div className="d-flex justify-content-around">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                  <a href={"soon/" + item.id} className="btn2 text-center text-decoration-none">View item</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Soon;
