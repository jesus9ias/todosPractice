import React, { Component } from 'react';
import { populateTodos } from './services/todosService';
//  import logo from './images/logo.svg';
import './styles/App.css';

class App extends Component {

  componentWillMount() {
    populateTodos();
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
