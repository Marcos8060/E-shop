import './App.css';
import Cart from './components/Cart';
import CartContainer from './components/CartContainer';
import Detail from './components/Detail';
import Flash from './components/Flash';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Soon from './components/Soon';

function App() {
  return (
    <div className="App">
      <Hero />
      <CartContainer />
      <Flash />
      <Soon />
      <Footer />
      <Detail />
      <Cart />
    </div>
  );
}

export default App;
