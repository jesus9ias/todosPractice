
export default class Todo {
  constructor(todo) {
    this.id = todo.id
    this.title = todo.title;
    this.description = todo.description;
    this.createdAt = todo.createdAt;
    this.expiresAt = todo.expiresAt;
  }

  viewAll() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      expiresAt: this.expiresAt,
    }
  }

  update(todo) {
    this.title = todo.title;
    this.description = todo.description;
    this.expiresAt = todo.expiresAt;
    console.log(todo, 'form');
  }
}