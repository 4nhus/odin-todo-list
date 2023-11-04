class Todo {
  title;
  description;
  dueDate;
  priority;
  isCompleted;
  notes;

  constructor(title, description, dueDate, priority, isCompleted, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = isCompleted;
    this.notes = notes;
  }

  toggleCompletion() {
    this.isCompleted = !this.isCompleted;
  }
}

function createTodoFromJSON(JSON) {
  return new Todo(
    JSON.title,
    JSON.description,
    JSON.dueDate,
    JSON.priority,
    JSON.isCompleted,
    JSON.notes,
  );
}

export { Todo, createTodoFromJSON };
