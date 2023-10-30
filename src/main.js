// TODO:
//  add styling
//  add local storage
//  refactor code
//  add todo deletion
//  add project deletion
//  add todo info to the info dialog
//  clear all dialogs when new dialog is opened

import "./style.css";
import Project from "./project";
import User from "./user";
import setUpDOMManipulation from "./dom";

const user = new User("", new Project("My first project", ""));

setUpDOMManipulation();

export function getCurrentProject() {
  return user.currentProject;
}

export function getCurrentUser() {
  return user;
}
