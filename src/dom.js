import { getCurrentProject } from "./main";

export default function setUpDOMManipulation() {
  const newTodoButton = document.getElementById("new-todo-button");
  const addTodoButton = document.getElementById("add-todo-button");
  const addTodoDialog = document.getElementById("add-todo-dialog");

  newTodoButton.addEventListener("click", () => {
    addTodoDialog.showModal();
  });
  addTodoButton.addEventListener("click", () => {
    const title = document.ge;
    getCurrentProject().addTodo(new Todo());
  });
}
