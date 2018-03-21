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
      <article className="card">
        <div className="card__data">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          <p className="card__date">{createdAt}</p>
          <p className="card__date">{expiresAt}</p>
          <p className="card__status">{statusLabel}</p>
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
