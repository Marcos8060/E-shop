import React from "react";
import "./css/cartcontainer.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import bike from "../images/bike3.png";

function CartItem({ item}) {
  const { id, image, name, price, amount } = item;

  return (
    <>
      <img className="img-fluid item_img" src={image} />
      <div>
        <h5 className="fw-bolder">{name}</h5>
        <span className="price">$ {price}</span>
        <button className="buyBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Buy now</button>
      </div>

      {/* detail */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="exampleModalLabel">
              {name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-0">
                <div className="col-md-6">
                  <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-md-6 text-left">
                  <h1 className="fw-bold item__name">{name}</h1>
                  <p className="price">$ 40</p>
                  <hr />
                  <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos recusandae quo fugiat reiciendis nemo accusantium, blanditiis sequi aperiam excepturi.</p>
                  <div className="item__footer">
                    <div>
                      <button className="increaseBtn">-</button>
                      <button className="increaseBtn">0</button>
                      <button className="increaseBtn">+</button>
                    </div>
                    <div>
                      <button className="addBtn">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of detail */}
    </>
  );
}

export default CartItem;
