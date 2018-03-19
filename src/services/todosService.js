import defaultTodos from './defaultTodos';
import todosCreator from './todosCreator';

export const getTodos = () => {
  return defaultTodos.map((todo) => {
    return todosCreator(todo);
  });
};