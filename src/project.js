import { createTodoFromJSON } from "./todo";
import { User } from "./user";

class Project {
  _title;
  _description;
  _todos;
  _isCompleted;

  constructor(title, description, todos, isCompleted) {
    this._title = title;
    this._description = description;
    this._todos = todos;
    this._isCompleted = isCompleted;
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
    this.updateProjectCompletionStatus();
  }

  deleteTodo(todo) {
    this._todos.delete(todo);
  }

  get isCompleted() {
    return this._isCompleted;
  }

  updateProjectCompletionStatus() {
    if (
      this._isCompleted &&
      [...this._todos].some((todo) => !todo.isCompleted)
    ) {
      this.toggleCompletion();
    } else if (
      !this._isCompleted &&
      [...this._todos].every((todo) => todo.isCompleted)
    ) {
      this.toggleCompletion();
    }
  }

  toggleCompletion() {
    this._isCompleted = !this._isCompleted;
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
  return new Project("Default Project Name", "", new Set(), true);
}

export { Project, createProjectFromJSON, createDefaultProject };
