import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Context from "./context";
import Detail from "./components/Detail";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <Router>
      <React.StrictMode>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/product/:id/" element={<Detail />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
        </Routes>
        <Footer />
      </React.StrictMode>
    </Router>
  </Context>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
