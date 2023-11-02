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
    if (projects.size === 0 && currentProject) {
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
    this._currentProject = project;

    this._numberOfProjects++;
    this._numberOfCompletedProjects++;
  }

  addTodo(todo) {
    this._currentProject.addTodo(todo);
    this.updateNumberOfCompletedProjects();
    this._numberOfTodos++;
  }

  deleteProject(project) {
    this.projects.delete(project);
    if (project === this._currentProject) {
      this._currentProject =
        this._projects.size === 0 ? null : this._projects.values().next().value;
    }

    if (project.isCompleted) {
      this._numberOfCompletedProjects--;
    }

    this._numberOfProjects--;
    this._numberOfTodos -= project._todos.size;
    this._numberOfCompletedTodos -= [...project._todos].filter(
      (todo) => todo.isCompleted,
    ).length;
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

  updateNumberOfCompletedProjects() {
    this._numberOfCompletedProjects = [...this._projects].filter(
      (project) => project.isCompleted,
    ).length;
  }
}

function createUserFromJSON(JSON) {
  const projects = new Set();
  JSON._projects.forEach((project) => {
    projects.add(createProjectFromJSON(project));
  });

  console.log(projects);

  return new User(
    JSON._name,
    projects,
    projects.size === 0 ? null : projects.values().next().value,
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
