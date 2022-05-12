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
 console.log(cart)
  return (
    <div className="App">
      <Navbar size={cart.length}/>
      <Hero />
      { show ? <CartContainer handleClick={handleClick} /> : <Cart /> }
      <Flash />
      <Soon />
      <Footer />
    </div>
  );
}

export default App;
