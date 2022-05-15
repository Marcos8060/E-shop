import React from "react";
import "./css/cartcontainer.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import bike from "../images/bike3.png";

function CartItem({ item, handleClick }) {
  // const { id, image, name, price, amount } = item;

  return (
    <>
      <img className="img-fluid item_img" src={bike} />
      <div>
        <h5 className="fw-bolder">Yellow men's shoes</h5>
        <span className="price">$ 34</span>
        <button className="buyBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >Buy now</button>
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
              Yellow men's shoes
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
                  <img className="img-fluid" src={bike} alt="" />
                </div>
                <div className="col-md-6 text-left">
                  <h1 className="fw-bold item__name">Light Brown Shoes</h1>
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
