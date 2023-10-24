"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/user.js");



const projects = [];
projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]());

const user = new _user__WEBPACK_IMPORTED_MODULE_1__["default"]();

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    _todos = new Set();

    get todos() {
        return this._todos;
    }

    addTodo(todo) {
        this._todos.add(todo);
    }
}

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
class User {
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNOOztBQUUxQjtBQUNBLGtCQUFrQixnREFBTzs7QUFFekIsaUJBQWlCLDZDQUFJOzs7Ozs7Ozs7Ozs7OztBQ05OO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCkpO1xuXG5jb25zdCB1c2VyID0gbmV3IFVzZXIoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBfdG9kb3MgPSBuZXcgU2V0KCk7XG5cbiAgICBnZXQgdG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvcztcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy5fdG9kb3MuYWRkKHRvZG8pO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICBfbmFtZSA9IFwiXCI7XG4gICAgX251bWJlck9mUHJvamVjdHMgPSAwO1xuICAgIF9udW1iZXJPZkNvbXBsZXRlZFByb2plY3RzID0gMDtcbiAgICBfbnVtYmVyT2ZUb2RvcyA9IDA7XG4gICAgX251bWJlck9mQ29tcGxldGVkVG9kb3MgPSAwO1xuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbnVtYmVyT2ZQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mUHJvamVjdHM7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50TnVtYmVyT2ZQcm9qZWN0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9udW1iZXJPZlByb2plY3RzKys7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50TnVtYmVyT2ZQcm9qZWN0cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9udW1iZXJPZlByb2plY3RzLS07XG4gICAgfVxuXG4gICAgZ2V0IG51bWJlck9mQ29tcGxldGVkUHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9udW1iZXJPZkNvbXBsZXRlZFByb2plY3RzO1xuICAgIH1cblxuICAgIGluY3JlbWVudE51bWJlck9mQ29tcGxldGVkUHJvamVjdHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZDb21wbGV0ZWRQcm9qZWN0cysrO1xuICAgIH1cblxuICAgIGRlY3JlbWVudE51bWJlck9mQ29tcGxldGVkUHJvamVjdHModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZDb21wbGV0ZWRQcm9qZWN0cy0tO1xuICAgIH1cblxuICAgIGdldCBudW1iZXJPZlRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZUb2RvcztcbiAgICB9XG5cbiAgICBpbmNyZW1lbnROdW1iZXJPZlRvZG9zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX251bWJlck9mVG9kb3MrKztcbiAgICB9XG5cbiAgICBkZWNyZW1lbnROdW1iZXJPZlRvZG9zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX251bWJlck9mVG9kb3MtLTtcbiAgICB9XG5cbiAgICBnZXQgbnVtYmVyT2ZDb21wbGV0ZWRUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mQ29tcGxldGVkVG9kb3M7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50TnVtYmVyT2ZDb21wbGV0ZWRUb2Rvcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9udW1iZXJPZkNvbXBsZXRlZFRvZG9zKys7XG4gICAgfVxuXG4gICAgZGVjcmVtZW50TnVtYmVyT2ZDb21wbGV0ZWRUb2Rvcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9udW1iZXJPZkNvbXBsZXRlZFRvZG9zLS07XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==