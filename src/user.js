export default class User {
  _name;
  _projects = new Set();
  _currentProject;
  _numberOfProjects;
  _numberOfCompletedProjects;
  _numberOfTodos;
  _numberOfCompletedTodos;

  constructor(name, currentProject) {
    this._name = name;
    this._projects.add(currentProject);
    this._currentProject = currentProject;
    this._numberOfProjects = 1;
    this._numberOfCompletedProjects = 1;
    this._numberOfTodos = 0;
    this._numberOfCompletedTodos = 0;
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
