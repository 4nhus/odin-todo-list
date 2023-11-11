import { createProjectFromJSON, createDefaultProject } from "./project";

function User(
  name,
  projects,
  currentProject,
  numberOfProjects,
  numberOfCompletedProjects,
  numberOfTodos,
  numberOfCompletedTodos,
) {
  if (projects.size === 0 && currentProject) {
    projects.add(currentProject);
  }
  return {
    name,
    projects,
    currentProject,
    numberOfProjects,
    numberOfCompletedProjects,
    numberOfTodos,
    numberOfCompletedTodos,
    addProject(project) {
      this.projects.add(project);
      this.currentProject = project;

      this.numberOfProjects++;
      this.numberOfCompletedProjects++;
    },
    addTodo(todo) {
      this.currentProject.addTodo(todo);
      this.updateNumberOfCompletedProjects();
      this.numberOfTodos++;
    },
    deleteProject(project) {
      this.projects.delete(project);
      if (project === this.currentProject) {
        this.currentProject =
          project.size === 0 ? null : this.projects.values().next().value;
      }

      if (project.isCompleted) {
        this.numberOfCompletedProjects--;
      }

      this.numberOfProjects--;
      this.numberOfTodos -= project.todos.size;
      this.numberOfCompletedTodos -= [...project.todos].filter(
        (todo) => todo.isCompleted,
      ).length;
    },
    decrementNumberOfTodos() {
      this.numberOfTodos--;
    },
    incrementNumberOfCompletedTodos() {
      this.numberOfCompletedTodos++;
    },
    decrementNumberOfCompletedTodos() {
      this.numberOfCompletedTodos--;
    },
    updateNumberOfCompletedProjects() {
      this.numberOfCompletedProjects = [...this.projects].filter(
        (project) => project.isCompleted,
      ).length;
    },
  };
}

function createUserFromJSON(JSON) {
  if (JSON) {
    const projects = new Set();
    JSON.projects.forEach((project) => {
      projects.add(createProjectFromJSON(project));
    });

    return User(
      JSON.name,
      projects,
      projects.size === 0 ? null : projects.values().next().value,
      JSON.numberOfProjects,
      JSON.numberOfCompletedProjects,
      JSON.numberOfTodos,
      JSON.numberOfCompletedTodos,
    );
  } else {
    return createDefaultUser();
  }
}

function createDefaultUser() {
  return User(
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
