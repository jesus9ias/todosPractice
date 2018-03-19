import storage from 'key-storage';
import defaultTodos from './defaultTodos';
import todosCreator from './todosCreator';

export const populateTodos = (lasts = 0) => {
  if (!storage.get('todos')) {
    storage.set('todos', JSON.stringify(defaultTodos));
  }
};

export const getTodos = (lasts = 0) => {
  let todos = JSON.parse(storage.get('todos'));
  todos = lasts > 0 ? todos.slice(0, lasts) : todos;
  return todos.map((todo) => {
    return todosCreator(todo);
  });
};

export const getTodo = (id) => {
  const todos = JSON.parse(storage.get('todos'));
  const filteredTodo = todos.find((todo) => {
    return todo.id === parseInt(id, 10);
  });
  return todosCreator(filteredTodo);
};

export const blankTodo = () => {
  return {
    id: 0,
    title: '',
    description: '',
    createdAt: '',
    expiresAt: ''
  };
};