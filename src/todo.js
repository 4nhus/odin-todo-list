export default function Todo(
  title,
  description,
  dueDate,
  priority,
  isCompleted,
  notes,
) {
  return {
    title,
    description,
    dueDate,
    priority,
    isCompleted,
    notes,
    toggleCompletion() {
      this.isCompleted = !this.isCompleted;
    },
  };
}

export function createTodoFromJSON(JSON) {
  return Todo(
    JSON.title,
    JSON.description,
    JSON.dueDate,
    JSON.priority,
    JSON.isCompleted,
    JSON.notes,
  );
}
