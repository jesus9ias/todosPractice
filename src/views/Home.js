import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getLastTodos } from '../services/todosService';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import TodoCards from '../components/TodoCards';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
    global.eventHub.addListener('todoCompleted', () => {
      this.getAll();
    });
  }

  getAll() {
    this.setState({ todos: getLastTodos(2) });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Last Todos</SectionTitle>
        <SectionContent>
          <Link className="button button--primary" to="/todosAdd">New Todo</Link>
          <TodoCards todos={this.state.todos} />
          <Link className="button button--primary" to="/todos/">All Todos</Link>
        </SectionContent>
      </Section>
    );
  }
}

export default Home;
