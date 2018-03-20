import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../services/todosService';
import Section from '../components/Section';
import TodosContent from '../components/TodosContent';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({ todos: getTodos() });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Todos</SectionTitle>
        <SectionContent>
          <Link to="/todosAdd">New Todo</Link>
          <TodosContent todos={this.state.todos} />
        </SectionContent>
      </Section>
    );
  }
}

export default Todos;
