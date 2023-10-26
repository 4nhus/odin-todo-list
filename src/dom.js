import { getCurrentProject } from "./main";
import Todo from "./todo";

export default function setUpDOMManipulation() {
  const newTodoButton = document.getElementById("new-todo-button");
  const addTodoButton = document.getElementById("add-todo-button");
  const addTodoDialog = document.getElementById("add-todo-dialog");

  newTodoButton.addEventListener("click", () => {
    addTodoDialog.showModal();
  });
  addTodoButton.addEventListener("click", () => {
    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const dueDate = document.getElementById("todo-date").value;
    const priority = document.getElementById("todo-priority").value;
    const notes = document.getElementById("todo-notes").value;
    getCurrentProject().addTodo(
      new Todo(title, description, dueDate, priority, notes),
    );
    displayTodos();
  });
}

function createTodoCard(todo) {
  const todoCard = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = todo._title;
  const dueDate = document.createElement("h1");
  dueDate.innerText = todo._dueDate;
  todoCard.appendChild(title);
  todoCard.appendChild(dueDate);
  return todoCard;
}

function clearTodos() {
  const todosDiv = document.getElementById("todos");
  while (todosDiv.children.length > 1) {
    todosDiv.removeChild(todosDiv.lastChild);
  }
}

function displayTodos() {
  clearTodos();
  const todos = [];
  getCurrentProject()._todos.forEach((todo) => {
    todos.push(createTodoCard(todo));
  });

  const todosDiv = document.getElementById("todos");
  todos.forEach((todo) => {
    todosDiv.appendChild(todo);
  });
}
