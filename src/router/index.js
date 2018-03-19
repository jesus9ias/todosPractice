import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import App from '../App';
import Home from '../views/Home';
import About from '../views/About';
import Todos from '../views/Todos';
import History from '../views/History';
import EditTodo from '../views/EditTodo';
import ViewTodo from '../views/ViewTodo';
import DeleteTodo from '../views/DeleteTodo';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Home}/>
          <Route path="/todos" component={Todos}/>
          <Route path="/todos/3" component={ViewTodo}/>
          <Route path="/todos/4/edit" component={EditTodo}/>
          <Route path="/todos/5/delete" component={DeleteTodo}/>
          <Route path="/history" component={History}/>
          <Route path="/about" component={About}/>
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;