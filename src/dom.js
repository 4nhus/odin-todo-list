import { getCurrentProject, getCurrentUser } from "./main";
import { Todo } from "./todo";
import { Project } from "./project";
import * as DOM from "./dom-getters";
import { saveUserToLocalStorage } from "./local-storage";

// RESET FUNCTIONS
function setTodoDueDateFormValueToDefault() {
  DOM.getAddTodoDueDateInput().valueAsNumber =
    Date.now() - new Date().getTimezoneOffset() * 60000;
}

function clearFormInputs(form) {
  Array.from(form.children)
    .filter((child) => child.value && child.value !== "low")
    .forEach((input) => {
      input.value = "";
    });

  setTodoDueDateFormValueToDefault();
}

// SETUP FUNCTIONS
function setupDialogCloseOnOutsideClick(dialog) {
  // Prevent click bubbling through to outside elements
  dialog.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  // Close dialog on outside click
  window.addEventListener("click", () => {
    dialog.close();
  });
}

function setupDialogsToCloseOnEscapeAndOutsideClick() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeOpenDialogs();
    }
  });

  setupDialogCloseOnOutsideClick(DOM.getAddTodoDialog());
  setupDialogCloseOnOutsideClick(DOM.getAddProjectDialog());
  setupDialogCloseOnOutsideClick(DOM.getInfoTodoDialog());
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
        new Todo(title, description, dueDate, priority, false, notes),
      );

      renderTodos();
      DOM.getAddTodoDialog().close();
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
      renderProjectsAndTodos();

      DOM.getAddProjectDialog().close();
      saveUserToLocalStorage();
    }
  });
}

export default function setUpDOMManipulation() {
  setTodoDueDateFormValueToDefault();
  renderProjectsAndTodos();

  DOM.getNewTodoButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    closeOpenDialogs();
    clearFormInputs(DOM.getAddTodoForm());
    DOM.getAddTodoDialog().show();
  });

  setupAddTodoButton();
  setupAddProjectButton();

  setupDialogsToCloseOnEscapeAndOutsideClick();

  DOM.getNewProjectButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    closeOpenDialogs();
    clearFormInputs(DOM.getAddProjectForm());
    DOM.getAddProjectDialog().show();
  });
}

// DISPLAY FUNCTIONS
function clearProjects() {
  while (DOM.getProjectsDiv().children.length > 0) {
    DOM.getProjectsDiv().removeChild(DOM.getProjectsDiv().lastChild);
  }
}

function clearTodos() {
  while (DOM.getTodosDiv().children.length > 1) {
    DOM.getTodosDiv().removeChild(DOM.getTodosDiv().lastChild);
  }
}

function renderProjectsAndTodos() {
  renderProjects();
  renderTodos();
}

function renderProjects() {
  clearProjects();
  const projects = [];

  getCurrentUser()._projects.forEach((project) => {
    projects.push(createProjectCard(project, getCurrentUser()));
  });

  projects.forEach((project) => {
    DOM.getProjectsDiv().appendChild(project);
  });
}

function renderTodos() {
  clearTodos();
  const todos = [];

  getCurrentProject()._todos.forEach((todo) => {
    todos.push(createTodoCard(todo, getCurrentProject()));
  });

  todos.forEach((todo) => {
    DOM.getTodosDiv().appendChild(todo);
  });
}

function createProjectCard(project, user) {
  const divWrapper = document.createElement("div");
  const buttonWrapper = document.createElement("button");
  const projectCard = document.createElement("div");
  const title = document.createElement("h1");
  title.innerText = project.title;
  const description = document.createElement("h1");
  description.innerText = project.description;
  projectCard.appendChild(title);
  projectCard.appendChild(description);
  buttonWrapper.appendChild(projectCard);
  buttonWrapper.addEventListener("click", () => {
    // Make this project the current project
    getCurrentUser().currentProject = project;
    renderTodos();
  });
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("h-11", "w-11");
  deleteButton.style.backgroundImage = "url(./assets/trash-bin.svg)";
  deleteButton.addEventListener("click", () => {
    user.deleteProject(project);
    renderProjectsAndTodos();
    saveUserToLocalStorage();
  });
  divWrapper.appendChild(buttonWrapper);
  divWrapper.appendChild(deleteButton);
  return divWrapper;
}

function createTodoCard(todo, project) {
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
    closeOpenDialogs();
    DOM.getInfoTodoTitle().innerText = todo.title;
    DOM.getInfoTodoDescription().innerText = todo.description;
    DOM.getInfoTodoDueDate().innerText = todo.dueDate;
    DOM.getInfoTodoPriority().innerText = todo.priority;
    DOM.getInfoTodoNotes().innerText = todo.notes;
    DOM.getInfoTodoDialog().show();
    e.stopImmediatePropagation();
  });
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("h-11", "w-11");
  deleteButton.style.backgroundImage = "url(./assets/trash-bin.svg)";
  deleteButton.addEventListener("click", () => {
    project.deleteTodo(todo);
    renderTodos();
    saveUserToLocalStorage();
  });

  const toggleCompletionLabel = document.createElement("label");
  const toggleCompletionCheckbox = document.createElement("input");
  toggleCompletionLabel.innerText = "Toggle completion";
  toggleCompletionCheckbox.type = "checkbox";
  toggleCompletionCheckbox.name = "toggle-completion";
  toggleCompletionCheckbox.value = "toggle-completion";
  toggleCompletionLabel.appendChild(toggleCompletionCheckbox);
  toggleCompletionCheckbox.addEventListener("click", () => {
    todo.toggleCompletion();
    console.log(todo.isCompleted);
  });

  divWrapper.appendChild(buttonWrapper);
  divWrapper.appendChild(toggleCompletionLabel);
  divWrapper.appendChild(deleteButton);
  return divWrapper;
}

function closeOpenDialogs() {
  DOM.getAddTodoDialog().open ? DOM.getAddTodoDialog().close() : null;
  DOM.getInfoTodoDialog().open ? DOM.getInfoTodoDialog().close() : null;
  DOM.getAddProjectDialog().open ? DOM.getAddProjectDialog().close() : null;
}
