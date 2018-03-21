import React from 'react';
import TodoCard from './TodoCard';
import '../styles/Cards.css';

export default (props) => <div className="cards">
  {
    props.todos.map((todo, i) => {
      return <TodoCard key={i} todo={todo} />
    })
  }
</div>
