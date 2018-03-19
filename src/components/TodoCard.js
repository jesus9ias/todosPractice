import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class TodoCard extends Component {
  render() {
    const {
      id,
      title,
      description,
      createdAt,
      expiresAt
    } = this.props.todo.viewAll();
    return (
      <article>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{createdAt}</p>
        <p>{expiresAt}</p>
        <Link to={`/todos/${id}`}>View</Link>
        <Link to={`/todos/${id}/edit`}>Edit</Link>
        <Link to={`/todos/${id}/delete`}>Delete</Link>
      </article>
    );
  }
}

TodoCard.defaultProps = {
  todo: PropTypes.Object
}

export default TodoCard;
