import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//  import { withRouter } from 'react-router';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import SectionContent from '../components/SectionContent';
import TodoForm from '../components/TodoForm';
import { saveTodo, blankTodo } from '../services/todosService';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  save(currentTodo) {
    saveTodo(currentTodo);
    this.props.history.push('/todos');
  }

  render() {
    return (
      <Section>
        <SectionTitle>Add</SectionTitle>
        <SectionContent>
          <TodoForm
            todo={blankTodo()}
            action={this.save}
          />
          <Link to="/todos">Regresar</Link>
        </SectionContent>
      </Section>
    );
  }
}

//  const RoutedAddTodo = withRouter(AddTodo);
export default AddTodo;
