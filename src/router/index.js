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
          <Route exact path="/todos" component={Todos}/>
          <Route exact path="/todos/:id" component={ViewTodo}/>
          <Route exact path="/todos/:id/edit" component={EditTodo}/>
          <Route exact path="/todos/:id/delete" component={DeleteTodo}/>
          <Route exact path="/history" component={History}/>
          <Route exact path="/about" component={About}/>
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;