import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { completeTodo } from '../services/todosService';

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.complete = this.complete.bind(this);
  }

  complete() {
    this.props.todo.complete();
    completeTodo(this.props.todo);
  }

  render() {
    const {
      id,
      title,
      description,
      createdAt,
      expiresAt,
      status,
      statusLabel
    } = this.props.todo.viewAll();
    return (
      <article>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{createdAt}</p>
        <p>{expiresAt}</p>
        <p>{statusLabel}</p>
        {
          status === 1 ?
            <div>
              <button onClick={this.complete}>Complete</button>
              <Link to={`/todos/${id}`}>View</Link>
              <Link to={`/todos/${id}/edit`}>Edit</Link>
              <Link to={`/todos/${id}/delete`}>Delete</Link>
            </div>
          :
            null
        }
      </article>
    );
  }
}

TodoCard.defaultProps = {
  todo: PropTypes.Object
}

export default TodoCard;
