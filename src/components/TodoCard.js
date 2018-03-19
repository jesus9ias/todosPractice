import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoCard extends Component {
  render() {
    const {
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
      </article>
    );
  }
}

TodoCard.defaultProps = {
  todo: PropTypes.Object
}

export default TodoCard;
