import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  import logo from './images/logo.svg';
//  import '../styles/Header.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = {
      title: this.title.value,
      description: this.description.value,
      expiresAt: this.expiresAt.value
    };
    this.props.todo.update(form);
    this.props.action(this.props.todo);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          ref={(input) => { this.title = input; }}
          defaultValue={this.props.todo.title}
          className="form__text" type="text"
        />
        <input
          ref={(input) => { this.description = input; }}
          defaultValue={this.props.todo.description}
          className="form__text" type="text"
        />
        <input
          ref={(input) => { this.expiresAt = input; }}
          defaultValue={this.props.todo.expiresAt}
          className="form__text" type="date"
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

TodoForm.defaultProps = {
  todo: PropTypes.Object,
  action: PropTypes.Function
}

export default TodoForm;
