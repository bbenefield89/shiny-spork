import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './func/home/Home';
import Demo from './class/demo/Demo';

class App extends Component {
  componentDidMount() {
    fetch('/').then(
      (res) => console.log(res)
    )
  }
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/demo' component={Demo} />
      </React.Fragment>
    );
  }
}

export default App;
