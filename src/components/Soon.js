import React, { useEffect, useState } from "react";
import "./css/soon.css";
import axios from "axios";
import VisibilityIcon from '@material-ui/icons/Visibility';

const url = "https://marcos-shop.herokuapp.com/api/soon/";
function Soon() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data);
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
                  <div className="d-flex justify-content-around align-items-center">
                    <span>{item.name}</span>
                    <span>$ {item.price}</span>
                    <a href={"soon/" + item.id}>
                    <VisibilityIcon className="see" />
                  </a>
                  </div>
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
