import { createTodoFromJSON } from "./todo";

export default function Project(title, description, todos, isCompleted) {
  return {
    title,
    description,
    todos,
    isCompleted,
    addTodo(todo) {
      this.todos.add(todo);
      this.updateProjectCompletionStatus();
    },
    deleteTodo(todo) {
      this.todos.delete(todo);
    },
    updateProjectCompletionStatus() {
      if (
        this.isCompleted &&
        [...this.todos].some((todo) => !todo.isCompleted)
      ) {
        this.toggleCompletion();
      } else if (
        !this.isCompleted &&
        [...this.todos].every((todo) => todo.isCompleted)
      ) {
        this.toggleCompletion();
      }
    },
    toggleCompletion() {
      this.isCompleted = !this.isCompleted;
    },
  };
}

export function createProjectFromJSON(JSON) {
  const todos = new Set();
  JSON.todos.forEach((todo) => {
    todos.add(createTodoFromJSON(todo));
  });

  return Project(JSON.title, JSON.description, todos);
}

export function createDefaultProject() {
  return Project("Default Project Name", "", new Set(), true);
}
