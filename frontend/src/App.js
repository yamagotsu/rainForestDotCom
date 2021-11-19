import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import CartModal from './components/Cart/CartModal'
import Home from './components/Home/Home';
import FrontPage from './components/FrontPage/FrontPage'
import { CartProvider } from 'react-use-cart';

import Searchbar from './components/Searchbar';


import { fetchData } from './data'
import Categories from './components/Categories/Categories';

class App extends React.Component {
  state = {
    data: [],
    loggedIn: false,
    category: '',
    visible: true,
  }

  async componentDidMount() {
    const data = await fetchData();

    // set the state
    this.setState({ data })
  }

  handleCategoryClick = async (category) => {
    const data = await fetchData(category);

    this.setState({ data })
    this.setState({ category: category })
    this.setState({ visible: false })
  }

  handleLogin = async () => {
    this.setState({ loggedIn: true })
  }

  render() {
    const { data } = this.state;
    const { category } = this.state

    return (
      <div className="App">

      <Searchbar 
      placeholder= "Enter a item"/>
        <CartProvider>
          <Home data={data} />
          <Cart />
        </CartProvider>
        {this.state.loggedIn ?
          <CartProvider>
            <CartModal />
            {this.state.visible ?
              <Categories handleCategoryClick={this.handleCategoryClick} />
              : <>
                <Home data={data} category={category} />
                <Cart />
              </>
            }
          </CartProvider>
          : <FrontPage handleLogin={this.handleLogin} />
        }

      </div>
    );
  }
}

export default App;