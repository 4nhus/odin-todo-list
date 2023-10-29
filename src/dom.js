import { getCurrentProject } from "./main";
import Todo from "./todo";

function hideElementOnOutsideClick(element) {
  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
    console.log("clicked on body");
    element.close();
  });
}

export default function setUpDOMManipulation() {
  const newTodoButton = document.getElementById("new-todo-button");
  const addTodoButton = document.getElementById("add-todo-button");
  const addTodoDialog = document.getElementById("add-todo-dialog");
  hideElementOnOutsideClick(addTodoDialog);

  addTodoDialog.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  newTodoButton.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    addTodoDialog.show();
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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      addTodoDialog.close();
      document.getElementById("todo").close();
    }
  });
}

function displayTodo(todo) {}

function createTodoCard(todo) {
  const todoInfo = document.getElementById("todo");
  hideElementOnOutsideClick(todoInfo);
  todoInfo.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  const buttonWrapper = document.createElement("button");
  const todoCard = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = todo._title;
  const dueDate = document.createElement("h1");
  dueDate.innerText = todo._dueDate;
  todoCard.appendChild(title);
  todoCard.appendChild(dueDate);
  buttonWrapper.appendChild(todoCard);
  buttonWrapper.addEventListener("click", (e) => {
    todoInfo.show();
    e.stopImmediatePropagation();
  });
  return buttonWrapper;
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
