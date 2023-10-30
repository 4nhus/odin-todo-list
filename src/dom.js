import { getCurrentProject, getCurrentUser } from "./main";
import Todo from "./todo";
import Project from "./project";

function hideElementOnOutsideClick(element) {
  const body = document.querySelector("body");
  body.addEventListener("click", (e) => {
    console.log("clicked on body");
    element.close();
  });
}

export default function setUpDOMManipulation() {
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
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;

    getCurrentUser().addProject(new Project(title, description));
    displayProjects();
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
  console.log("creating project card");
  console.log(title.innerText);
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
  console.log("here");

  getCurrentUser()._projects.forEach((project) => {
    console.log(project._title);
    projects.push(createProjectCard(project));
  });

  const projectsDiv = document.getElementById("projects");
  projects.forEach((project) => {
    projectsDiv.appendChild(project);
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
