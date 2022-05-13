import React from "react";
import "./css/cartcontainer.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import image from "../images/shoe8.webp";

function CartItem({ item, handleClick }) {
  // const { id, image, name, price, amount } = item;

  return (
    <>
      <img className="img-fluid item_img" src={image} />
      <div className="d-flex justify-content-around align-items-center">
        <span>Yellow men's shoes</span>
        <span>$ 34</span>
          <VisibilityIcon className="see" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      </div>

      {/* detail */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="exampleModalLabel">
                E-shop
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row g-0">
                <div className="col-md-6">
                  <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-md-6 text-left">
                  <h1 className="fw-bold">Light Brown Shoes</h1>
                  <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos recusandae quo fugiat reiciendis nemo accusantium, blanditiis sequi aperiam excepturi.</p>
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
