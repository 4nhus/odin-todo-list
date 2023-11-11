import getUser from "./main";
import { Todo } from "./todo";
import { Project } from "./project";
import * as DOM from "./dom-getters";
import { saveUserToLocalStorage } from "./local-storage";
import {
  getCancelUserEditButton,
  getEditUserButton,
  getSaveUserButton,
  getUserInfoButton,
  getUserInfoCurrentProject,
} from "./dom-getters";

// RESET FUNCTIONS
function setTodoDueDateFormValueToDefault() {
  DOM.getAddTodoDueDateInput().valueAsNumber =
    Date.now() - new Date().getTimezoneOffset() * 60000;
}

function clearFormInputs(form) {
  Array.from(form.children)
    .filter((child) => child.value)
    .forEach((input) => {
      input.value = input.tagName === "SELECT" ? "Low" : "";
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

  DOM.getDialogs().forEach((dialog) => {
    setupDialogCloseOnOutsideClick(dialog);
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

      getUser().addTodo(
        Todo(title, description, dueDate, priority, false, notes),
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
      getUser().addProject(Project(title, description, new Set(), true));
      renderProjectsAndTodos();

      DOM.getAddProjectDialog().close();
      saveUserToLocalStorage();
    }
  });
}

function setupUserInfoButton() {
  DOM.getUserInfoButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    closeOpenDialogs();
    updateUserInfo();

    if (!DOM.getDeleteProjectsButton().hasAttribute("hidden")) {
      toggleUserInfoButtons();
    }
    DOM.getUserInfoDialog().show();
  });
}

function toggleUserInfoButtons() {
  DOM.getEditUserButton().toggleAttribute("hidden");
  DOM.getDeleteProjectsButton().toggleAttribute("hidden");
  DOM.getCancelUserEditButton().toggleAttribute("hidden");
  DOM.getSaveUserButton().toggleAttribute("hidden");
}

function setupEditUserButton() {
  DOM.getEditUserButton().addEventListener("click", () => {
    toggleUserInfoButtons();
  });
}

function setupCancelUserEditButton() {
  DOM.getCancelUserEditButton().addEventListener("click", () => {
    toggleUserInfoButtons();
  });
}

function updateUserInfo() {
  const user = getUser();
  DOM.getUserInfoName().value = user.name;
  DOM.getUserInfoProjects().innerText = [...user.projects]
    .map((project) => project.title)
    .join("\n");
  DOM.getUserInfoCurrentProject().replaceChildren();
  getUser().projects.forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.value = project.title;
    projectOption.innerText = project.title;
    if (project === getUser().currentProject) {
      projectOption.selected = true;
    }
    DOM.getUserInfoCurrentProject().appendChild(projectOption);
  });
  DOM.getUserInfoNumberOfProjects().innerText = user.numberOfProjects;
  DOM.getUserInfoNumberOfCompletedProjects().innerText =
    user.numberOfCompletedProjects;
  DOM.getUserInfoNumberOfTodos().innerText = user.numberOfTodos;
  DOM.getUserInfoNumberOfCompletedTodos().innerText =
    user.numberOfCompletedTodos;
}

function setupUserGreeting() {
  DOM.getUserGreeting().innerText = `Hello, ${getUser().name}`;
}

function setUserNameInput() {
  DOM.getUserInfoName().value = getUser().name;
}

function setupSaveUserButton() {
  DOM.getSaveUserButton().addEventListener("click", (e) => {
    getUser().name = DOM.getUserInfoName().value;
    getUser().currentProject = [...getUser().projects][
      DOM.getUserInfoCurrentProject().selectedIndex
    ];
    setupUserGreeting();
    renderTodos();
    saveUserToLocalStorage();
  });
}

function setupDeleteProjectsButton() {
  DOM.getDeleteProjectsButton().addEventListener("click", () => {
    if (confirm("Delete all projects?")) {
      getUser().deleteAllProjects();
      saveUserToLocalStorage();
      DOM.getUserInfoDialog().close();
      renderProjectsAndTodos();
    }
  });
}

export default function setUpDOMManipulation() {
  setupUserGreeting();
  setUserNameInput();
  setTodoDueDateFormValueToDefault();
  renderProjectsAndTodos();
  setupEditUserButton();
  setupCancelUserEditButton();
  setupDeleteProjectsButton();

  DOM.getNewTodoButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    closeOpenDialogs();
    clearFormInputs(DOM.getAddTodoForm());
    DOM.getAddTodoDialog().show();
  });

  setupAddTodoButton();
  setupAddProjectButton();
  setupUserInfoButton();
  setupSaveUserButton();

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

  getUser().projects.forEach((project) => {
    projects.push(createProjectCard(project));
  });

  projects.forEach((project) => {
    DOM.getProjectsDiv().appendChild(project);
  });
}

function renderTodos() {
  clearTodos();
  const todos = [];

  if (getUser().currentProject) {
    getUser().currentProject.todos.forEach((todo) => {
      todos.push(createTodoCard(todo, getUser().currentProject));
    });

    todos.forEach((todo) => {
      DOM.getTodosDiv().appendChild(todo);
    });
  }
}

function createProjectCard(project) {
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
    getUser().currentProject = project;
    renderTodos();
  });
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("h-11", "w-11");
  deleteButton.style.backgroundImage = "url(./assets/trash-bin.svg)";
  deleteButton.addEventListener("click", () => {
    getUser().deleteProject(project);
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
  title.innerText = todo.title;
  const dueDate = document.createElement("h1");
  dueDate.innerText = todo.dueDate;
  todoCard.appendChild(title);
  todoCard.appendChild(dueDate);
  buttonWrapper.appendChild(todoCard);
  buttonWrapper.addEventListener("click", (e) => {
    closeOpenDialogs();
    DOM.getInfoTodoTitle().innerText = todo.title;
    DOM.getInfoTodoDescription().innerText = todo.description || "N/A";
    DOM.getInfoTodoDueDate().innerText = todo.dueDate;
    DOM.getInfoTodoPriority().innerText = todo.priority;
    DOM.getInfoTodoNotes().innerText = todo.notes || "N/A";
    DOM.getInfoTodoDialog().show();
    e.stopImmediatePropagation();
  });
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("h-11", "w-11");
  deleteButton.style.backgroundImage = "url(./assets/trash-bin.svg)";
  deleteButton.addEventListener("click", () => {
    project.deleteTodo(todo);
    renderTodos();
    getUser().decrementNumberOfTodos();
    saveUserToLocalStorage();
  });

  const toggleCompletionLabel = document.createElement("label");
  const toggleCompletionCheckbox = document.createElement("input");
  toggleCompletionLabel.innerText = "Toggle completion";
  toggleCompletionCheckbox.type = "checkbox";
  toggleCompletionCheckbox.name = "toggle-completion";
  toggleCompletionCheckbox.value = "toggle-completion";
  toggleCompletionCheckbox.checked = todo.isCompleted;
  toggleCompletionLabel.appendChild(toggleCompletionCheckbox);
  toggleCompletionCheckbox.addEventListener("click", () => {
    todo.isCompleted
      ? getUser().decrementNumberOfCompletedTodos()
      : getUser().incrementNumberOfCompletedTodos();
    todo.toggleCompletion();
    project.updateProjectCompletionStatus();
    getUser().updateNumberOfCompletedProjects();
    saveUserToLocalStorage();
  });

  divWrapper.appendChild(buttonWrapper);
  divWrapper.appendChild(toggleCompletionLabel);
  divWrapper.appendChild(deleteButton);
  return divWrapper;
}

function closeOpenDialogs() {
  DOM.getDialogs().forEach((dialog) => {
    dialog.open ? dialog.close() : null;
  });
}
