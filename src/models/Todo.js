
export default class Todo {
  constructor(todo) {
    this.title = todo.title;
    this.description = todo.description;
    this.createdAt = todo.createdAt;
    this.expiresAT = todo.expiresAT;
  }

  viewAll() {
    return {
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      expiresAT: this.expiresAT,
    }
  }
}