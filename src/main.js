import "./style.css";
import Project from "./project";
import User from "./user";
import setUpDOMManipulation from "./dom";

setUpDOMManipulation();

const projects = [];
projects.push(new Project());

const user = new User();
