class TaskList {
  constructor() {
    this.tasks = [];
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  deleteTask() {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}
