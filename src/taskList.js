//not currently used...
class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  renderTasksByPriority() {
    //To Do:
  }

  deleteTask() {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }
}
