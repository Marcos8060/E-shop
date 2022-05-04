import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useGlobalContext } from "../context";
import "./css/cartcontainer.css";
import VisibilityIcon from '@material-ui/icons/Visibility';


function CartItem({ id, image, name, price, amount }) {
  const { toggleAmount} = useGlobalContext();
  return (
    <>
        <img className="img-fluid item_img" src={image} alt={name} />
        <div className="d-flex justify-content-around align-items-center">
          <span>{name}</span>
          <span>${price}</span>
          <VisibilityIcon className="see" />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <ExpandLessIcon
            className="increase"
            onClick={() => toggleAmount(id, 'inc')}
          />
          <p className="amount">{amount}</p>
          <ExpandMoreIcon
            className="increase"
            onClick={() => toggleAmount(id, 'dec')}
          />
        </div>
    </>
  );
}

export default CartItem;
