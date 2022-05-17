import React from 'react';
import './App.css';
import Hero from './components/Hero';
import CartContainer from './components/CartContainer'
import Special from './components/Special';
import Random from './components/Random';
import Acessory from './components/Acessory';



function App() {

  return (
    <>
    <Hero />
    <CartContainer />
    <Random />
    <Special />
    <Acessory />
    </>
  );
}

export default App;
