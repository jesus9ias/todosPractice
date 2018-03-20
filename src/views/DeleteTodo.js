import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//  import { withRouter } from 'react-router-dom'
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import { getTodo, deleteTodo } from '../services/todosService';
//  import logo from './images/logo.svg';
//  import './styles/App.css';

class DeleteTodo extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(todo) {
    deleteTodo(todo);
    this.props.history.push('/todos');
  }

  render() {
    const todo = getTodo(this.props.match.params.id);
    return (
      <Section>
        <SectionTitle>Edit</SectionTitle>
        <SectionContent>
          <p className="App-intro">
            Confirm to delete "{todo.title}" Todo?
          </p>
          <button onClick={() => this.delete(todo)}>Yes</button>
          <Link to="/todos">No</Link>
        </SectionContent>
      </Section>
    );
  }
}

export default DeleteTodo;
