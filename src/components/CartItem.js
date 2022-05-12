import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./css/cartcontainer.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function CartItem({ item, handleClick }) {
  const { id, image, name, price, amount } = item;

  return (
    <>
      <img className="img-fluid item_img" src={image} alt={name} />
      <div className="d-flex justify-content-around align-items-center">
        <span>{name}</span>
        <span>$ {price}</span>
        <a href={"detail/" + id}>
          <VisibilityIcon className="see" />
        </a>
      </div>
      <div>
        <button onClick={() => handleClick(item)} className="btn btn-outline-dark btn-sm mt-4 mb-4">Add to cart</button>
      </div>
    </>
  );
}

export default CartItem;
