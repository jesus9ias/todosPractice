
export default class Todo {
  constructor(todo) {
    this.id = todo.id
    this.title = todo.title;
    this.description = todo.description;
    this.createdAt = todo.createdAt;
    this.expiresAt = todo.expiresAt;
    this.status = todo.status;
    this.statusLabel = { 1: 'Active', 2: 'Completed' };
  }

  viewAll() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      expiresAt: this.expiresAt,
      status: this.status,
      statusLabel: this.statusLabel[this.status]
    }
  }

  getAll() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      expiresAt: this.expiresAt,
      status: this.status
    }
  }

  complete() {
    this.status = 2;
  }

  update(todo) {
    this.title = todo.title;
    this.description = todo.description;
    this.expiresAt = todo.expiresAt;
    this.status = todo.status;
  }
}