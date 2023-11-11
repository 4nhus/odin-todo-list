// TODO:
//  add styling
//  refactor updation of user stats (add container references to todos, projects (deleting completed todos doesnt change number of completed todos in user porfile
//  general refactoring
//  add ability to edit project details
//  add ability to edit todo details
//  make sure username cant be empty string when editing it
import "./style.css";
import { createDefaultUser, createUserFromJSON } from "./user";
import setUpDOMManipulation from "./dom";
import { isLocalStorageAvailable } from "./local-storage";

const user = isLocalStorageAvailable()
  ? createUserFromJSON(JSON.parse(window.localStorage.getItem("user")))
  : createDefaultUser();

setUpDOMManipulation();

export function getCurrentProject() {
  return user.currentProject;
}

export function getCurrentUser() {
  return user;
}
