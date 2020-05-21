//not currently used...
class TaskList {
  constructor() {
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map((task) => task.render()).join("");
  }

  renderTasksByPriority() {
    return this.tasks.sort((taskA, taskB) => taskA.priority - taskB.priority).map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description);
  }

  compare(taskA, taskB) {
    const priorityA = taskA.priority
    const priorityB = taskB.priority


  }
}
