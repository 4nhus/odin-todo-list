export default class Project {
  _title;
  _description;
  _todos = new Set();

  constructor(title, description) {
    this._name = title;
    this._description = description;
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get todos() {
    return this._todos;
  }

  addTodo(todo) {
    this._todos.add(todo);
  }
}
