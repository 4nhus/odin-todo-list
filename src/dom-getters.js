function getById(id) {
  return document.getElementById(id);
}

function getAddTodoTitleInput() {
  return getById("todo-title");
}

function getAddTodoDescriptionInput() {
  return getById("todo-description");
}

function getAddTodoDueDateInput() {
  return getById("todo-date");
}

function getAddTodoPriorityInput() {
  return getById("todo-priority");
}

function getAddTodoNotesInput() {
  return getById("todo-notes");
}

function getInfoTodoTitle() {
  return getById("title");
}

function getInfoTodoDescription() {
  return getById("description");
}

function getInfoTodoDueDate() {
  return getById("date");
}

function getInfoTodoPriority() {
  return getById("priority");
}

function getInfoTodoNotes() {
  return getById("notes");
}

function getAddProjectTitleInput() {
  return getById("project-title");
}

function getAddProjectDescriptionInput() {
  return getById("project-description");
}

function getNewTodoButton() {
  return getById("new-todo-button");
}

function getAddTodoButton() {
  return getById("add-todo-button");
}

function getAddProjectButton() {
  return getById("add-project-button");
}

function getAddTodoDialog() {
  return getById("add-todo-dialog");
}

function getInfoTodoDialog() {
  return getById("info-todo-dialog");
}

function getAddProjectDialog() {
  return getById("add-project-dialog");
}

function getAddTodoForm() {
  return getById("add-todo-form");
}

function getAddProjectForm() {
  return getById("add-project-form");
}

function getNewProjectButton() {
  return getById("new-project-button");
}

function getTodosDiv() {
  return getById("todos");
}

function getProjectsDiv() {
  return getById("projects");
}

function getUserInfoButton() {
  return getById("user-info-button");
}

function getUserInfoDialog() {
  return getById("user-info-dialog");
}

function getUserInfoName() {
  return getById("user-name");
}

function getUserInfoProjects() {
  return getById("user-projects");
}

function getUserInfoCurrentProject() {
  return getById("user-current-project");
}

function getUserInfoNumberOfProjects() {
  return getById("user-number-of-projects");
}

function getUserInfoNumberOfCompletedProjects() {
  return getById("user-number-of-completed-projects");
}

function getUserInfoNumberOfTodos() {
  return getById("user-number-of-todos");
}

function getUserInfoNumberOfCompletedTodos() {
  return getById("user-number-of-completed-todos");
}

function getDialogs() {
  return [
    getInfoTodoDialog(),
    getUserInfoDialog(),
    getAddProjectDialog(),
    getAddTodoDialog(),
  ];
}

export {
  getAddTodoTitleInput,
  getAddTodoDescriptionInput,
  getAddTodoDueDateInput,
  getAddTodoPriorityInput,
  getAddTodoNotesInput,
  getInfoTodoTitle,
  getInfoTodoDescription,
  getInfoTodoDueDate,
  getInfoTodoPriority,
  getInfoTodoNotes,
  getAddProjectTitleInput,
  getAddProjectDescriptionInput,
  getNewTodoButton,
  getNewProjectButton,
  getAddTodoButton,
  getAddProjectButton,
  getAddTodoDialog,
  getInfoTodoDialog,
  getAddProjectDialog,
  getAddTodoForm,
  getAddProjectForm,
  getTodosDiv,
  getProjectsDiv,
  getUserInfoButton,
  getUserInfoDialog,
  getUserInfoName,
  getUserInfoProjects,
  getUserInfoCurrentProject,
  getUserInfoNumberOfProjects,
  getUserInfoNumberOfCompletedProjects,
  getUserInfoNumberOfTodos,
  getUserInfoNumberOfCompletedTodos,
  getDialogs,
};
