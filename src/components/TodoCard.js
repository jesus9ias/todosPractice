import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoButtons from './TodoButtons';

class TodoCard extends Component {
  render() {
    const {
      title,
      description,
      createdAt,
      expiresAt,
      status,
      statusLabel
    } = this.props.todo.viewAll();
    return (
      <article className="todo">
        <div className="todo__data">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{createdAt}</p>
          <p>{expiresAt}</p>
          <p>{statusLabel}</p>
        </div>
        {
          status === 1 ?
            <TodoButtons todo={this.props.todo} />
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
