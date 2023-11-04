// TODO:
//  add styling
//  refactor updation of user stats (add container references to todos, projects
//  general refactoring
//  add ability to edit user details
//  add ability to edit project details
//  add ability to edit todo details
//  add ability to clear user projects

import "./style.css";
import { createDefaultUser, createUserFromJSON, User } from "./user";
import setUpDOMManipulation from "./dom";
import { isLocalStorageAvailable } from "./local-storage";

//window.localStorage.clear();
// const user = (isLocalStorageAvailable() && window.localStorage.getItem("user")) || new User("", new Project("My second project", ""));
const user =
  isLocalStorageAvailable() && window.localStorage.getItem("user")
    ? createUserFromJSON(JSON.parse(window.localStorage.getItem("user")))
    : createDefaultUser();

setUpDOMManipulation();

export function getCurrentProject() {
  return user.currentProject;
}

export function getCurrentUser() {
  return user;
}
