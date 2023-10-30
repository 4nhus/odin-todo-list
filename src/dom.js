import { getCurrentProject, getCurrentUser } from "./main";
import Todo from "./todo";
import Project from "./project";
import "./dom-getters";

function resetTodoDueDateFormValue() {
  getAddTodoDueDateInput().valueAsNumber =
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

export default function setUpDOMManipulation() {
  resetTodoDueDateFormValue();
  displayProjects();

  getAddTodoDialog().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  getNewTodoButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    getAddTodoDialog().show();
  });

  getAddTodoButton().addEventListener("click", () => {
    if (getAddTodoForm().checkValidity()) {
      const title = getAddTodoTitleInput().value;
      const description = getAddTodoDescriptionInput().value;
      const dueDate = getAddTodoDueDateInput().value;
      const priority = getAddTodoPriorityInput().value;
      const notes = getAddTodoNotesInput().value;

      getCurrentProject().addTodo(
        new Todo(title, description, dueDate, priority, notes),
      );

      displayTodos();
      getAddTodoDialog().close();
      clearFormInputs(getAddTodoForm());
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      getAddTodoDialog().close();
      getInfoTodoDialog().close();
      getAddProjectDialog().close();
    }
  });

  getAddProjectDialog().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });

  closeDialogOnOutsideClick(getAddProjectDialog());
  getNewProjectButton().addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    getAddProjectDialog().show();
  });

  getAddProjectButton().addEventListener("click", () => {
    if (getAddProjectForm().checkValidity()) {
      const title = getAddProjectTitleInput().value;
      const description = getAddProjectDescriptionInput().value;

      getCurrentUser().addProject(new Project(title, description));
      displayProjects();

      clearFormInputs(getAddProjectForm());
      getAddProjectDialog().close();
    }
  });
}

function clearProjects() {
  while (getProjectsDiv().children.length > 0) {
    getProjectsDiv().removeChild(getProjectsDiv().lastChild);
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
    getProjectsDiv().appendChild(project);
  });
}

function displayTodo(todo) {}

function createTodoCard(todo) {
  closeDialogOnOutsideClick(getInfoTodoDialog());
  getInfoTodoDialog().addEventListener("click", (e) => {
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
    getInfoTodoDialog().show();
    e.stopImmediatePropagation();
  });
  return buttonWrapper;
}

function clearTodos() {
  while (getTodosDiv().children.length > 1) {
    getTodosDiv().removeChild(getTodosDiv().lastChild);
  }
}

function displayTodos() {
  clearTodos();
  const todos = [];
  getCurrentProject()._todos.forEach((todo) => {
    todos.push(createTodoCard(todo));
  });

  todos.forEach((todo) => {
    getTodosDiv().appendChild(todo);
  });
}
