import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './components/Cart'
import CartContainer from './components/CartContainer'



function App() {

  return (
    <>
     <Router>
     <Navbar />
     <Hero />
     <Routes>
          <Route exact path='/cart' element={ < Cart />}></Route>
        </Routes>
        <CartContainer />
     </Router>
    </>
  );
}

export default App;
