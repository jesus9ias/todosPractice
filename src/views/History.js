import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getHistory } from '../services/todosService';
import Section from '../components/Section';
import TodoCards from '../components/TodoCards';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({ todos: getHistory() });
  }

  render() {
    return (
      <Section>
        <SectionTitle>History</SectionTitle>
        <SectionContent>
          <Link to="/todosAdd">New Todo</Link>
          <TodoCards todos={this.state.todos} />
        </SectionContent>
      </Section>
    );
  }
}

export default History;
