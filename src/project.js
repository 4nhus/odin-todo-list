import { createTodoFromJSON } from "./todo";
import { User } from "./user";

class Project {
  user;
  title;
  description;
  todos;
  isCompleted;

  constructor(title, description, todos, isCompleted) {
    this.title = title;
    this.description = description;
    this.todos = todos;
    this.isCompleted = isCompleted;
  }

  addTodo(todo) {
    this.todos.add(todo);
    this.updateProjectCompletionStatus();
  }

  deleteTodo(todo) {
    this.todos.delete(todo);
  }

  updateProjectCompletionStatus() {
    if (this.isCompleted && [...this.todos].some((todo) => !todo.isCompleted)) {
      this.toggleCompletion();
    } else if (
      !this.isCompleted &&
      [...this.todos].every((todo) => todo.isCompleted)
    ) {
      this.toggleCompletion();
    }
  }

  toggleCompletion() {
    this.isCompleted = !this.isCompleted;
  }
}

function createProjectFromJSON(JSON) {
  const todos = new Set();
  JSON.todos.forEach((todo) => {
    todos.add(createTodoFromJSON(todo));
  });

  return new Project(JSON.title, JSON.description, todos);
}

function createDefaultProject() {
  return new Project("Default Project Name", "", new Set(), true);
}

export { Project, createProjectFromJSON, createDefaultProject };
