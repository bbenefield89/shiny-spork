import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from './Home.js';
import Demo from './Demo.js';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/demo" component={Demo} />
      </Router>
    );
  }
}

export default App;
