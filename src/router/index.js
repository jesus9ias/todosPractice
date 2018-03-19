import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import Home from '../views/Home';
import About from '../views/About';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;