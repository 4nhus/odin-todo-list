import { getCurrentProject, getCurrentUser } from "./main";
import { Todo } from "./todo";
import { Project } from "./project";
import * as DOM from "./dom-getters";
import { saveUserToLocalStorage } from "./local-storage";

function resetTodoDueDateFormValue() {
  DOM.getAddTodoDueDateInput().valueAsNumber =
    Date.now() - new Date().getTimezoneOffset() * 60000;
}

function clearFormInputs(form) {
  Array.from(form.children)
    .filter((child) => child.value && child.value !== "low")
    .forEach((input) => {
      input.value = "";
    });

  resetTodoDueDateFormValue();
}

function closeDialogOnOutsideClick(dialog) {
  window.addEventListener("click", (e) => {
    dialog.close();
  });
}

function setupAddTodoButton() {
  DOM.getAddTodoButton().addEventListener("click", () => {
    if (DOM.getAddTodoForm().checkValidity()) {
      const title = DOM.getAddTodoTitleInput().value;
      const description = DOM.getAddTodoDescriptionInput().value;
      const dueDate = DOM.getAddTodoDueDateInput().value;
      const priority = DOM.getAddTodoPriorityInput().value;
      const notes = DOM.getAddTodoNotesInput().value;

      getCurrentProject().addTodo(
        new Todo(title, description, dueDate, priority, notes),
      );

      displayTodos();
      DOM.getAddTodoDialog().close();
      clearFormInputs(DOM.getAddTodoForm());
      saveUserToLocalStorage();
    }
  });
}

function setupAddProjectButton() {
  DOM.getAddProjectButton().addEventListener("click", () => {
    if (DOM.getAddProjectForm().checkValidity()) {
      const title = DOM.getAddProjectTitleInput().value;
      const description = DOM.getAddProjectDescriptionInput().value;

      getCurrentUser().addProject(new Project(title, description, new Set()));
      console.log(getCurrentUser());
      displayProjects();

      clearFormInputs(DOM.getAddProjectForm());
      DOM.getAddProjectDialog().close();
      saveUserToLocalStorage();
    }
  });
}

export default function setUpDOMManipulation() {
  resetTodoDueDateFormValue();
  displayProjects();
  displayTodos();

  DOM.getAddTodoDialog().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  DOM.getNewTodoButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    DOM.getAddTodoDialog().show();
  });

  setupAddTodoButton();
  setupAddProjectButton();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      DOM.getAddTodoDialog().close();
      DOM.getInfoTodoDialog().close();
      DOM.getAddProjectDialog().close();
    }
  });

  DOM.getAddProjectDialog().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  closeDialogOnOutsideClick(DOM.getAddTodoDialog());
  closeDialogOnOutsideClick(DOM.getAddProjectDialog());
  closeDialogOnOutsideClick(DOM.getInfoTodoDialog());

  DOM.getNewProjectButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    DOM.getAddProjectDialog().show();
  });
}

function clearProjects() {
  while (DOM.getProjectsDiv().children.length > 0) {
    DOM.getProjectsDiv().removeChild(DOM.getProjectsDiv().lastChild);
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

  projects.forEach((project) => {
    DOM.getProjectsDiv().appendChild(project);
  });
}

function displayTodo(todo) {}

function createTodoCard(todo, project) {
  DOM.getInfoTodoDialog().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  const divWrapper = document.createElement("div");
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
    DOM.getAddTodoTitleInput().value = todo.title;
    DOM.getAddTodoDescriptionInput().value = todo.description;
    DOM.getAddTodoDueDateInput().value = todo.dueDate;
    DOM.getAddTodoPriorityInput().value = todo.priority;
    DOM.getAddTodoNotesInput().value = todo.notes;
    DOM.getInfoTodoDialog().show();
    e.stopImmediatePropagation();
  });
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("h-11", "w-11");
  deleteButton.style.backgroundImage = "url(./assets/trash-bin.svg)";
  deleteButton.addEventListener("click", () => {
    project.deleteTodo(todo);
    displayTodos();
    saveUserToLocalStorage();
  });
  divWrapper.appendChild(buttonWrapper);
  divWrapper.appendChild(deleteButton);
  return divWrapper;
}

function clearTodos() {
  while (DOM.getTodosDiv().children.length > 1) {
    DOM.getTodosDiv().removeChild(DOM.getTodosDiv().lastChild);
  }
}

function displayTodos() {
  clearTodos();
  const todos = [];

  getCurrentProject()._todos.forEach((todo) => {
    todos.push(createTodoCard(todo, getCurrentProject()));
  });

  todos.forEach((todo) => {
    DOM.getTodosDiv().appendChild(todo);
  });
}
