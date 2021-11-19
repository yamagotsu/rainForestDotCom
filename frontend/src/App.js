import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './Cart';
import Home from './Home';
import  { CartProvider } from 'react-use-cart';
import FrontPage from './FrontPage';

function App() {
  return (
    <div className="App">
      <FrontPage />
    </div>
  );
}

export default App;