// TODO:
//  add styling
//  refactor code
//  add todo info to the info dialog
//  disable required form values on hide
//  add ability to edit user details
//  add page showing user details
//  add toggle for todo completion

import "./style.css";
import { createDefaultUser, createUserFromJSON, User } from "./user";
import setUpDOMManipulation from "./dom";
import { isLocalStorageAvailable } from "./local-storage";

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
