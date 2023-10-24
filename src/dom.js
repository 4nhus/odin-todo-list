export default function setUpDOMManipulation() {
  const addTodo = document.getElementById("add-todo-button");
  const addTodoDialog = document.getElementById("add-todo-dialog");

  addTodo.addEventListener("click", () => {
    addTodoDialog.showModal();
  });
}
