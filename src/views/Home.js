import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../services/todosService';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import TodosContent from '../components/TodosContent';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({ todos: getTodos(2) });
  }

  render() {
    return (
      <Section>
        <SectionTitle>Last Todos</SectionTitle>
        <SectionContent>
          <Link to="/todosAdd">New Todo</Link>
          <TodosContent todos={this.state.todos} />
        </SectionContent>
      </Section>
    );
  }
}

export default Home;
