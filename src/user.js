import { createProjectFromJSON, createDefaultProject } from "./project";

class User {
  name;
  projects;
  currentProject;
  numberOfProjects;
  numberOfCompletedProjects;
  numberOfTodos;
  numberOfCompletedTodos;

  constructor(
    name,
    projects,
    currentProject,
    numberOfProjects,
    numberOfCompleteProjects,
    numberOfTodos,
    numberOfCompletedTodos,
  ) {
    this.name = name;
    this.projects = projects;
    if (projects.size === 0 && currentProject) {
      this.projects.add(currentProject);
    }
    this.currentProject = currentProject;
    this.numberOfProjects = numberOfProjects;
    this.numberOfCompletedProjects = numberOfCompleteProjects;
    this.numberOfTodos = numberOfTodos;
    this.numberOfCompletedTodos = numberOfCompletedTodos;
  }

  addProject(project) {
    this.projects.add(project);
    this.currentProject = project;

    this.numberOfProjects++;
    this.numberOfCompletedProjects++;
  }

  addTodo(todo) {
    this.currentProject.addTodo(todo);
    this.updateNumberOfCompletedProjects();
    this.numberOfTodos++;
  }

  deleteProject(project) {
    this.projects.delete(project);
    if (project === this.currentProject) {
      this.currentProject =
        this.project.size === 0 ? null : this.project.values().next().value;
    }

    if (project.isCompleted) {
      this.numberOfCompletedProjects--;
    }

    this.numberOfProjects--;
    this.numberOfTodos -= project.todos.size;
    this.numberOfCompletedTodos -= [...project.todos].filter(
      (todo) => todo.isCompleted,
    ).length;
  }

  incrementNumberOfProjects(value) {
    this.numberOfProjects++;
  }

  decrementNumberOfProjects(value) {
    this.numberOfProjects--;
  }

  incrementNumberOfCompletedProjects(value) {
    this.numberOfCompletedProjects++;
  }

  decrementNumberOfCompletedProjects(value) {
    this.numberOfCompletedProjects--;
  }

  incrementNumberOfTodos(value) {
    this.numberOfTodos++;
  }

  decrementNumberOfTodos(value) {
    this.numberOfTodos--;
  }

  incrementNumberOfCompletedTodos(value) {
    this.numberOfCompletedTodos++;
  }

  decrementNumberOfCompletedTodos(value) {
    this.numberOfCompletedTodos--;
  }

  updateNumberOfCompletedProjects() {
    this.numberOfCompletedProjects = [...this.projects].filter(
      (project) => project.isCompleted,
    ).length;
  }
}

function createUserFromJSON(JSON) {
  const projects = new Set();
  JSON.projects.forEach((project) => {
    projects.add(createProjectFromJSON(project));
  });

  console.log(projects);

  return new User(
    JSON.name,
    projects,
    projects.size === 0 ? null : projects.values().next().value,
    JSON.numberOfProjects,
    JSON.numberOfCompletedProjects,
    JSON.numberOfTodos,
    JSON.numberOfCompletedTodos,
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
