import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../services/todosService';
import Section from '../components/Section';
import TodoCards from '../components/TodoCards';
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
    this.getAll();
    global.eventHub.addListener('todoCompleted', () => {

      this.getAll();
    });
  }

  getAll() {
    this.setState({ todos: getTodos(2) });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Todos</SectionTitle>
        <SectionContent>
          <Link className="button button--primary" to="/todosAdd">New Todo</Link>
          <TodoCards todos={this.state.todos} />
        </SectionContent>
      </Section>
    );
  }
}

export default Todos;
