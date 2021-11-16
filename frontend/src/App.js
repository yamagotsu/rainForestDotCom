import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './Cart';
import Home from './Home';
import  { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        <Cart />
     </CartProvider>
    
      <header className="App-header">
        <h3>Hi, This is your Rainforest World!</h3>
        <Button variant="secondary" className="mx-2">Button Example</Button>
      </header>
    </div>
  );
}

export default App;