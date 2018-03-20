import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          {todo.statusLabel[todo.status]}
          <Link to="/todos">Regresar</Link>
        </SectionContent>
      </Section>
    );
  }
}

export default ViewTodo;
