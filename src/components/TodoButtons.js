import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { completeTodo } from '../services/todosService';
import completeIcon from '../images/complete-icon.png';
import editIcon from '../images/edit-icon.png';
import deleteIcon from '../images/delete-icon.png';
import viewIcon from '../images/view-icon.png';

class TodoButtons extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
  }

  complete() {
    this.props.todo.complete();
    completeTodo(this.props.todo);
  }

  render() {
    return (
      <div className="todo__buttons">
        <button onClick={this.complete}>
          <img alt="View" src={completeIcon} width="32px" />
        </button>
        <Link to={`/todos/${this.props.todo.id}`}>
        <img alt="View" src={viewIcon} width="32px" />
        </Link>
        <Link to={`/todos/${this.props.todo.id}/edit`}>
          <img alt="View" src={editIcon} width="32px" />
        </Link>
        <Link to={`/todos/${this.props.todo.id}/delete`}>
        <img alt="View" src={deleteIcon} width="32px" />
        </Link>
      </div>
    );
  }
}

TodoButtons.defaultProps = {
  todo: PropTypes.Object
}

export default TodoButtons;
