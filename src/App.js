import React from 'react';
import './App.css';
import Hero from './components/Hero';
import CartContainer from './components/CartContainer'
import Special from './components/Special';
import Random from './components/Random';



function App() {

  return (
    <>
    <Hero />
    <CartContainer />
    <Random />
    <Special />
    </>
  );
}

export default App;
