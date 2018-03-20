import React, { Component } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import TodoForm from '../components/TodoForm';
import { saveTodo, blankTodo } from '../services/todosService';
//  import logo from './images/logo.svg';
//  import './styles/App.css';

class AddTodo extends Component {
  save(currentTodo) {
    saveTodo(currentTodo);
  }

  render() {
    return (
      <Section>
        <SectionTitle>Add</SectionTitle>
        <SectionContent>
          <TodoForm
            todo={blankTodo()}
            action={this.save}
          />
        </SectionContent>
      </Section>
    );
  }
}

export default AddTodo;
