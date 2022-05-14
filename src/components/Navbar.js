import React, { useEffect, useState, useRef } from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import image from "../images/shoe8.webp";
import DeleteIcon from "@material-ui/icons/Delete";

function Navbar({ size, setShow }) {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app__navbar">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{
            transition: "1s ease",
            backgroundColor: navBackground ? "#F8CA4C" : "transparent",
          }}
        >
          <div className="container">
            <a className="navbar-brand" onClick={() => setShow(true)}>
              <h1 className="logo">Bike</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MenuIcon className="menu" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <ShoppingBasketIcon className="cart" />
                    <span className="quantity">0</span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="toCart">
                      <img className="img-fluid toCartImg" src={image} alt="" />
                      <div>
                        <span>Italian leather</span>
                        <br />
                        <span>$ 40</span>
                      </div>
                      <DeleteIcon className="delete" />
                    </div>
                    <hr />
                    <div className="toCart">
                      <img className="img-fluid toCartImg" src={image} alt="" />
                      <div>
                        <span>Italian leather</span>
                        <br />
                        <span>$ 40</span>
                      </div>
                      <DeleteIcon className="delete" />
                    </div>
                    <hr />
                    <div className="toCart">
                      <img className="img-fluid toCartImg" src={image} alt="" />
                      <div>
                        <span>Italian leather</span>
                        <br />
                        <span>$ 40</span>
                      </div>
                      <DeleteIcon className="delete" />
                    </div>
                    <hr />
                    <div className="toCart">
                      <img className="img-fluid toCartImg" src={image} alt="" />
                      <div>
                        <span>Italian leather</span>
                        <br />
                        <span>$ 40</span>
                      </div>
                      <DeleteIcon className="delete" />
                    </div>
                    <hr />
                    <button className="btn9">Go to cart</button>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
