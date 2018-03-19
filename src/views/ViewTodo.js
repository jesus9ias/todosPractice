import React, { Component } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import { getTodo } from '../services/todosService';
//  import logo from './images/logo.svg';
//  import './styles/App.css';

class ViewTodo extends Component {
  render() {
    const todo = getTodo(this.props.match.params.id);
    return (
      <Section>
        <SectionTitle>View</SectionTitle>
        <SectionContent>
          {todo.title}
          {todo.description}
          {todo.createdAt}
          {todo.endsAt}
        </SectionContent>
      </Section>
    );
  }
}

export default ViewTodo;
