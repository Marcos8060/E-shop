import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import SoonDetail from "./components/SoonDetail";
import Flash from "./components/Flash";
import Soon from "./components/Soon";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/detail/:id/" element={<Detail />}></Route>
          <Route exact path="/soon/:id/" element={<SoonDetail />}></Route>
          <Route exact path="/" element={<App />}></Route>
        </Routes>
      <Footer />
      </React.StrictMode>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
