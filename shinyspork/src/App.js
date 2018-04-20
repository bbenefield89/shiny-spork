import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home.js';
import Demo from './Demo.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home}/>
        <Route path='/demo' component={Demo}/>
      </React.Fragment>
    );
  }
}

export default App;
