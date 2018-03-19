import React, { Component } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import TodoForm from '../components/TodoForm';
import { getTodo } from '../services/todosService';
//  import logo from './images/logo.svg';
//  import './styles/App.css';

class EditTodo extends Component {
  render() {
    const todo = getTodo(this.props.match.params.id);
    return (
      <Section>
        <SectionTitle>Edit</SectionTitle>
        <SectionContent>
          <TodoForm todo={todo} />
        </SectionContent>
      </Section>
    );
  }
}

export default EditTodo;
