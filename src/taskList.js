class TaskList {
  constructor() {
    this.tasks = [];
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }
}
