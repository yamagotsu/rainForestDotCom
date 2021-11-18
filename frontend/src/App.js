import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import { CartProvider } from 'react-use-cart';
import Searchbar from './components/Searchbar';

import { fetchData } from './data'

class App extends React.Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const data = await fetchData();

    // set the state
    this.setState({ data })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
      <Searchbar 
      placeholder= "Enter a item" 
      data={fetchData} />
        <CartProvider>
          <Home data={data} />
          <Cart />
        </CartProvider>
      </div>
    );
  }
}

export default App;