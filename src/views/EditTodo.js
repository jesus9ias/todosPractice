import React, { Component } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import TodoForm from '../components/TodoForm';
import { getTodo, updateTodo } from '../services/todosService';
//  import logo from './images/logo.svg';
//  import './styles/App.css';

class EditTodo extends Component {
  update(currentTodo) {
    updateTodo(currentTodo);
  }

  render() {
    return (
      <Section>
        <SectionTitle>Edit</SectionTitle>
        <SectionContent>
          <TodoForm
            todo={getTodo(this.props.match.params.id)}
            action={this.update}
          />
        </SectionContent>
      </Section>
    );
  }
}

export default EditTodo;
