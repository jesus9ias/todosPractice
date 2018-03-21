import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import TodoForm from '../components/TodoForm';
import { getTodo, updateTodo } from '../services/todosService';

class EditTodo extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  update(currentTodo) {
    updateTodo(currentTodo);
    this.props.history.push('/todos');
  }

  render() {
    return (
      <Section>
        <SectionTitle>Edit</SectionTitle>
        <SectionContent>
          <TodoForm
            todo={getTodo(this.props.match.params.id)}
            action={this.update}
          />
          <Link to="/todos">Regresar</Link>
        </SectionContent>
      </Section>
    );
  }
}

export default EditTodo;
