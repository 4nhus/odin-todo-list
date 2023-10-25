import "./style.css";
import Project from "./project";
import User from "./user";
import setUpDOMManipulation from "./dom";

const projects = [];
const currentProject = new Project();
projects.push(currentProject);

setUpDOMManipulation();

const user = new User();

export function getCurrentProject() {
  return currentProject;
}
