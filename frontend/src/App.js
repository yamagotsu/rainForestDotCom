import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Category/Category';
import './App.css';

import { fetchData } from './data'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const data = await fetchData();

    // set the state
    this.setState({ data })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App container" >
        <Category data={data} />
      </div>
    );
  }
}

export default App;