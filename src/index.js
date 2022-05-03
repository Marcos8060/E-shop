import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <Router>
      <React.StrictMode>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/detail/:id/" element={<Detail />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/" element={<App />}></Route>
        </Routes>
        <Footer />
      </React.StrictMode>
    </Router>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
