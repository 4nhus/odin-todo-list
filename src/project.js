import { createTodoFromJSON } from "./todo";
import { User } from "./user";

class Project {
  _title;
  _description;
  _todos;

  constructor(title, description, todos) {
    this._title = title;
    this._description = description;
    this._todos = todos;
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

  deleteTodo(todo) {
    this._todos.delete(todo);
  }
}

function createProjectFromJSON(JSON) {
  const todos = new Set();
  JSON._todos.forEach((todo) => {
    todos.add(createTodoFromJSON(todo));
  });

  return new Project(JSON._title, JSON._description, todos);
}

function createDefaultProject() {
  return new Project("Default Project Name", "", new Set());
}

export { Project, createProjectFromJSON, createDefaultProject };
