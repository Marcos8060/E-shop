import React,{ useEffect,useState} from "react";
import denim from "../images/denim.png";
import "./css/detail.css";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";
import Footer from "./Footer";


function Detail() {
  const { addToCart } = useGlobalContext();
  const [item,setItem] = useState([])
  const { id } = useParams();
  const url = `http://127.0.0.1:8000/api/items/${id}/`

  useEffect(() =>{
    const getItem = async() =>{
      const result = await axios.get(url)
      setItem(result.data)
      console.log(result.data);
    }
    getItem();
  },[])
  return (
    <>
      <div className="app__detail">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <img className="img-fluid detail-img" src={item.image} alt="" />
            </div>
            <div className="col-md-8">
              <h3 className="title">{item.name}</h3>
              <p>
                {item.description}
              </p>
              <span>Category: {item.category}</span>
              <p>Rated:  <StarIcon className="star"/> <StarIcon className="star"/> <StarIcon className="star"/> <StarIcon className="star"/> <StarHalfIcon className="star"/></p>
              <h3 className="price">${item.price}</h3>
              <p>Stock available</p>
              <a href="/" className="btn btn3">Back to shop</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
