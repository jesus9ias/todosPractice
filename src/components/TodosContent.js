import React from 'react';
import TodoCard from './TodoCard';
import '../styles/Todos.css';

export default (props) => <div className="todos">
  {
    props.todos.map((todo, i) => {
      return <TodoCard key={i} todo={todo} />
    })
  }
</div>
