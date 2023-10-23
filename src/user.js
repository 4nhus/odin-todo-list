export default class User {
    _name = "";
    _numberOfProjects = 0;
    _numberOfCompletedProjects = 0;
    _numberOfTodos = 0;
    _numberOfCompletedTodos = 0;

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get numberOfProjects() {
        return this._numberOfProjects;
    }

    incrementNumberOfProjects(value) {
        this._numberOfProjects++;
    }

    decrementNumberOfProjects(value) {
        this._numberOfProjects--;
    }

    get numberOfCompletedProjects() {
        return this._numberOfCompletedProjects;
    }

    incrementNumberOfCompletedProjects(value) {
        this._numberOfCompletedProjects++;
    }

    decrementNumberOfCompletedProjects(value) {
        this._numberOfCompletedProjects--;
    }

    get numberOfTodos() {
        return this._numberOfTodos;
    }

    incrementNumberOfTodos(value) {
        this._numberOfTodos++;
    }

    decrementNumberOfTodos(value) {
        this._numberOfTodos--;
    }

    get numberOfCompletedTodos() {
        return this._numberOfCompletedTodos;
    }

    incrementNumberOfCompletedTodos(value) {
        this._numberOfCompletedTodos++;
    }

    decrementNumberOfCompletedTodos(value) {
        this._numberOfCompletedTodos--;
    }
}