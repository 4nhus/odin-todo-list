export const DOM = {
  getById(id) {
    return document.getElementById(id);
  },
  getAddTodoTitleInput() {
    return this.getById("todo-title");
  },
  getAddTodoDescriptionInput() {
    return this.getById("todo-description");
  },
  getAddTodoDueDateInput() {
    return this.getById("todo-date");
  },
  getAddTodoPriorityInput() {
    return this.getById("todo-priority");
  },
  getAddTodoNotesInput() {
    return this.getById("todo-notes");
  },
  getInfoTodoTitle() {
    return this.getById("title");
  },
  getInfoTodoDescription() {
    return this.getById("description");
  },
  getInfoTodoDueDate() {
    return this.getById("date");
  },
  getInfoTodoPriority() {
    return this.getById("priority");
  },
  getInfoTodoNotes() {
    return this.getById("notes");
  },
  getAddProjectTitleInput() {
    return this.getById("project-title");
  },
  getAddProjectDescriptionInput() {
    return this.getById("project-description");
  },
  getNewTodoButton() {
    return this.getById("new-todo-button");
  },
  getAddTodoButton() {
    return this.getById("add-todo-button");
  },
  getAddProjectButton() {
    return this.getById("add-project-button");
  },
  getAddTodoDialog() {
    return this.getById("add-todo-dialog");
  },
  getInfoTodoDialog() {
    return this.getById("info-todo-dialog");
  },
  getAddProjectDialog() {
    return this.getById("add-project-dialog");
  },
  getAddTodoForm() {
    return this.getById("add-todo-form");
  },
  getAddProjectForm() {
    return this.getById("add-project-form");
  },
  getNewProjectButton() {
    return this.getById("new-project-button");
  },
  getTodosDiv() {
    return this.getById("todos");
  },
  getProjectsDiv() {
    return this.getById("projects");
  },
  getUserInfoButton() {
    return this.getById("user-info-button");
  },
  getUserInfoDialog() {
    return this.getById("user-info-dialog");
  },
  getUserInfoName() {
    return this.getById("user-name");
  },
  getUserInfoProjects() {
    return this.getById("user-projects");
  },
  getUserInfoCurrentProject() {
    return this.getById("user-current-project");
  },
  getUserInfoNumberOfProjects() {
    return this.getById("user-number-of-projects");
  },
  getUserInfoNumberOfCompletedProjects() {
    return this.getById("user-number-of-completed-projects");
  },
  getUserInfoNumberOfTodos() {
    return this.getById("user-number-of-todos");
  },
  getUserInfoNumberOfCompletedTodos() {
    return this.getById("user-number-of-completed-todos");
  },
  getDialogs() {
    return [
      getInfoTodoDialog(),
      getUserInfoDialog(),
      getAddProjectDialog(),
      getAddTodoDialog(),
    ];
  },
  getUserGreeting() {
    return this.getById("user-greeting");
  },
  getSaveUserButton() {
    return this.getById("save-user-button");
  },
  getEditUserButton() {
    return this.getById("edit-user-button");
  },
  getCancelUserEditButton() {
    return this.getById("cancel-user-edit-button");
  },
  getDeleteProjectsButton() {
    return this.getById("delete-projects-button");
  },
};
