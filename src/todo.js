export default class Todo {
  _title;
  _description;
  _dueDate;
  _priority;
  _isCompleted = false;
  _notes;

  constructor(title, description, dueDate, priority, notes) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._notes = notes;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this._description = description;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    this._priority = priority;
  }

  get isCompleted() {
    return this._isCompleted;
  }

  get notes() {
    return this._notes;
  }

  set notes(notes) {
    this._notes = notes;
  }

  get checklist() {
    return this._checklist;
  }

  toggleCompletion() {
    this._isCompleted = !this._isCompleted;
  }
}
