import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import { CartProvider } from 'react-use-cart';

import { fetchData } from './data'
import Categories from './components/Categories/Categories';

class App extends React.Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const data = await fetchData();

    // set the state
    this.setState({ data })
  }

  handleCategoryClick = async (category) => {
    const data = await fetchData(category);

    this.setState({ data })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Categories handleCategoryClick={this.handleCategoryClick} />
        <CartProvider>
          <Home data={data} />
          <Cart />
        </CartProvider>
      </div>
    );
  }
}

export default App;