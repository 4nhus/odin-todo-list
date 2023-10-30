import "./style.css";
import Project from "./project";
import User from "./user";
import setUpDOMManipulation from "./dom";

const user = new User("", new Project("My first project", ""));

setUpDOMManipulation();

const element = document.getElementById("todo-date");
element.valueAsNumber = Date.now() - new Date().getTimezoneOffset() * 60000;

export function getCurrentProject() {
  return user.currentProject;
}

export function getCurrentUser() {
  return user;
}
