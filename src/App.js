import './App.css';
import CartContainer from './components/CartContainer';
import Flash from './components/Flash';
import Hero from './components/Hero';
import Soon from './components/Soon';


function App() {
  return (
    <div className="App">
      <Hero />
      <CartContainer />
      <Flash />
      <Soon />
    </div>
  );
}

export default App;
