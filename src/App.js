import { useState } from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import Flash from './components/Flash';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Soon from './components/Soon';
import Cart from './components/Cart'


function App() {
  const [show,setShow] = useState(true)
  const [cart,setCart] = useState([])

  const handleClick = (item) =>{
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart,item])
 }
 
 const handleChange = (item,d) =>{
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d

  if(arr[ind].amount === 0) arr[ind].amount = 1;
  setCart([...arr])
}

  return (
    <div className="App">
      <Navbar size={cart.length} setShow={setShow}/>
      <Hero />
      { show ? <CartContainer handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> }
    </div>
  );
}

export default App;
