import { createProjectFromJSON, createDefaultProject } from "./project";

class User {
  _name;
  _projects;
  _currentProject;
  _numberOfProjects;
  _numberOfCompletedProjects;
  _numberOfTodos;
  _numberOfCompletedTodos;

  constructor(
    name,
    projects,
    currentProject,
    numberOfProjects,
    numberOfCompleteProjects,
    numberOfTodos,
    numberOfCompletedTodos,
  ) {
    this._name = name;
    this._projects = projects;
    if (projects.size === 0) {
      this._projects.add(currentProject);
    }
    this._currentProject = currentProject;
    this._numberOfProjects = numberOfProjects;
    this._numberOfCompletedProjects = numberOfCompleteProjects;
    this._numberOfTodos = numberOfTodos;
    this._numberOfCompletedTodos = numberOfCompletedTodos;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get projects() {
    return this._projects;
  }

  get currentProject() {
    return this._currentProject;
  }

  set currentProject(value) {
    this._currentProject = value;
  }

  addProject(project) {
    this.projects.add(project);
  }

  deleteProject(project) {
    this.projects.delete(project);
  }

  get numberOfProjects() {
    return this._numberOfProjects;
  }

  incrementNumberOfProjects(value) {
    this._numberOfProjects++;
  }

  decrementNumberOfProjects(value) {
    this._numberOfProjects--;
  }

  get numberOfCompletedProjects() {
    return this._numberOfCompletedProjects;
  }

  incrementNumberOfCompletedProjects(value) {
    this._numberOfCompletedProjects++;
  }

  decrementNumberOfCompletedProjects(value) {
    this._numberOfCompletedProjects--;
  }

  get numberOfTodos() {
    return this._numberOfTodos;
  }

  incrementNumberOfTodos(value) {
    this._numberOfTodos++;
  }

  decrementNumberOfTodos(value) {
    this._numberOfTodos--;
  }

  get numberOfCompletedTodos() {
    return this._numberOfCompletedTodos;
  }

  incrementNumberOfCompletedTodos(value) {
    this._numberOfCompletedTodos++;
  }

  decrementNumberOfCompletedTodos(value) {
    this._numberOfCompletedTodos--;
  }
}

function createUserFromJSON(JSON) {
  const projects = new Set();
  JSON._projects.forEach((project) => {
    projects.add(createProjectFromJSON(project));
  });

  return new User(
    JSON._name,
    projects,
    projects.values().next().value,
    JSON._numberOfProjects,
    JSON._numberOfCompletedProjects,
    JSON._numberOfTodos,
    JSON._numberOfCompletedTodos,
  );
}

function createDefaultUser() {
  return new User(
    "Default User Name",
    new Set(),
    createDefaultProject(),
    1,
    1,
    0,
    0,
  );
}

export { User, createUserFromJSON, createDefaultUser };
