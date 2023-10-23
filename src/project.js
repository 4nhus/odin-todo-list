export default class Project {
    _todos = new Set();

    get todos() {
        return this._todos;
    }

    addTodo(todo) {
        this._todos.add(todo);
    }
}