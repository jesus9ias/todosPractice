import storage from 'key-storage';
import defaultTodos from './defaultTodos';
import todosCreator from './todosCreator';

export const getTodos = () => {
  if (!storage.get('todos')) {
    storage.set('todos', JSON.stringify(defaultTodos));
  }
  const todos = JSON.parse(storage.get('todos'));
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