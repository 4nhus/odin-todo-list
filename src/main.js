import "./style.css";
import Project from "./project";
import User from "./user";
import setUpDOMManipulation from "./dom";

const projects = [];
const currentProject = new Project();
projects.push(currentProject);

setUpDOMManipulation();

const element = document.getElementById("todo-date");
element.valueAsNumber = Date.now() - new Date().getTimezoneOffset() * 60000;

const user = new User();

export function getCurrentProject() {
  return currentProject;
}
