import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
          <a href="/">
            <VisibilityIcon className="see" />
          </a>
        </div>
    </>
  );
}

export default CartItem;
