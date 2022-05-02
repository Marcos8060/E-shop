import './App.css';
import CartContainer from './components/CartContainer';
import Flash from './components/Flash';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <CartContainer />
      <Flash />
    </div>
  );
}

export default App;
