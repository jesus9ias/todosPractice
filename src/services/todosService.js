import storage from 'key-storage';
import Guid from 'guid';
import defaultTodos from './defaultTodos';
import todosCreator from './todosCreator';

export const populateTodos = (lasts = 0) => {
  if (!storage.get('todos')) {
    storage.set('todos', JSON.stringify(defaultTodos));
  }
};

export const getTodos = () => {
  let todos = JSON.parse(storage.get('todos'));
  return todos.filter((todo) => {
    return todo.status === 1;
  }).map((todo) => {
    return todosCreator(todo);
  });
};

export const getLastTodos = (lasts = 0) => {
  let todos = JSON.parse(storage.get('todos'));
  return todos.filter((todo) => {
    return todo.status === 1;
  }).slice(0, lasts).map((todo) => {
    return todosCreator(todo);
  });
};


export const getHistory = (lasts = 0) => {
  let todos = JSON.parse(storage.get('todos'));
  todos = lasts > 0 ? todos.slice(0, lasts) : todos;
  return todos.filter((todo) => {
    return todo.status === 2;
  }).map((todo) => {
    return todosCreator(todo);
  });
};

export const getTodo = (id) => {
  const todos = JSON.parse(storage.get('todos'));
  const filteredTodo = todos.find((todo) => {
    return todo.id === id;
  });
  return todosCreator(filteredTodo);
};

export const updateTodo = (currentTodo) => {
  const todos = JSON.parse(storage.get('todos'));
  const newTodos = todos.map((todo, i) => {
    if (todo.id === currentTodo.id) {
      return currentTodo.getAll();
    }
    return todo;
  });
  storage.set('todos', JSON.stringify(newTodos));
};

export const saveTodo = (currentTodo) => {
  const todos = JSON.parse(storage.get('todos'));
  todos.push(currentTodo.getAll());
  storage.set('todos', JSON.stringify(todos));
};

export const deleteTodo = (currentTodo) => {
  const todos = JSON.parse(storage.get('todos'));
  const filteredTodos = todos.filter((todo) => {
    return todo.id !== currentTodo.id;
  });
  storage.set('todos', JSON.stringify(filteredTodos));
};

export const completeTodo = (currentTodo) => {
  const todos = JSON.parse(storage.get('todos'));
  const filteredTodos = todos.map((todo) => {
    return todo.id === currentTodo.id ? currentTodo.getAll() : todo;
  });
  storage.set('todos', JSON.stringify(filteredTodos));
};

export const blankTodo = () => {
  return todosCreator({
    id: Guid.raw(),
    title: '',
    description: '',
    createdAt: '',
    expiresAt: '',
    status: 1
  });
};