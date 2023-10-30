import { getCurrentProject, getCurrentUser } from "./main";
import Todo from "./todo";
import Project from "./project";

function resetTodoDueDateFormValue() {
  const element = document.getElementById("todo-date");
  element.valueAsNumber = Date.now() - new Date().getTimezoneOffset() * 60000;
}

function clearFormInputs(dialogId) {
  const dialog = document.getElementById(dialogId);
  const form = dialog.firstElementChild;

  Array.from(form.children)
    .filter((child) => child.value && child.value !== "low")
    .forEach((input) => {
      input.value = "";
    });

  resetTodoDueDateFormValue();
}

function hideElementOnOutsideClick(element) {
  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
    element.close();
  });
}

export default function setUpDOMManipulation() {
  resetTodoDueDateFormValue();
  displayProjects();
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
    const todoForm = addTodoDialog.firstElementChild;

    if (todoForm.checkValidity()) {
      const title = document.getElementById("todo-title").value;
      const description = document.getElementById("todo-description").value;
      const dueDate = document.getElementById("todo-date").value;
      const priority = document.getElementById("todo-priority").value;
      const notes = document.getElementById("todo-notes").value;

      getCurrentProject().addTodo(
        new Todo(title, description, dueDate, priority, notes),
      );
      console.log("here");
      displayTodos();
      addTodoDialog.close();
      clearFormInputs("add-todo-dialog");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      addTodoDialog.close();
      document.getElementById("info-todo-dialog").close();
      addProjectDialog.close();
    }
  });

  const addProjectDialog = document.getElementById("add-project-dialog");
  addProjectDialog.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  hideElementOnOutsideClick(addProjectDialog);
  const newProjectButton = document.getElementById("new-project-button");
  newProjectButton.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    addProjectDialog.show();
  });

  const addProjectButton = document.getElementById("add-project-button");

  addProjectButton.addEventListener("click", () => {
    const projectForm = addProjectDialog.firstElementChild;

    if (projectForm.checkValidity()) {
      const title = document.getElementById("project-title").value;
      const description = document.getElementById("project-description").value;

      getCurrentUser().addProject(new Project(title, description));
      displayProjects();

      clearFormInputs("add-project-dialog");
      addProjectDialog.close();
    }
  });
}

function clearProjects() {
  const projectsDiv = document.getElementById("projects");
  while (projectsDiv.children.length > 0) {
    projectsDiv.removeChild(projectsDiv.lastChild);
  }
}

function createProjectCard(project) {
  const buttonWrapper = document.createElement("button");
  const projectCard = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = project.title;
  const description = document.createElement("h1");
  description.innerText = project.description;
  projectCard.appendChild(title);
  projectCard.appendChild(description);
  buttonWrapper.appendChild(projectCard);
  buttonWrapper.addEventListener("click", (e) => {
    // Make this project the current project
    getCurrentUser().currentProject = project;
    displayTodos();
  });
  return buttonWrapper;
}

function displayProjects() {
  clearProjects();
  const projects = [];

  getCurrentUser()._projects.forEach((project) => {
    projects.push(createProjectCard(project));
  });

  const projectsDiv = document.getElementById("projects");
  projects.forEach((project) => {
    projectsDiv.appendChild(project);
  });
}

function displayTodo(todo) {}

function createTodoCard(todo) {
  const todoInfoDialog = document.getElementById("info-todo-dialog");
  hideElementOnOutsideClick(todoInfoDialog);
  todoInfoDialog.addEventListener("click", (e) => {
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
    document.getElementById("todo-title").value = todo.title;
    document.getElementById("todo-description").value = todo.description;
    document.getElementById("todo-date").value = todo.dueDate;
    document.getElementById("todo-priority").value = todo.priority;
    document.getElementById("todo-notes").value = todo.notes;
    todoInfoDialog.show();
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
