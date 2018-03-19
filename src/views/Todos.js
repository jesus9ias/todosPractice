import React, { Component } from 'react';
import { getTodos } from '../services/todosService';
import Section from '../components/Section';
import TodoCard from '../components/TodoCard';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
//  import './styles/App.css';

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
        {
          this.state.todos.map((todo, i) => {
            return <TodoCard key={i} todo={todo} />
          })
        }
        </SectionContent>
      </Section>
    );
  }
}

export default Todos;
