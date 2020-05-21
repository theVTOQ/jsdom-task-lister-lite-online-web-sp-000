document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementByTagName("ul");
  const newTaskListForm = document.getElementById("create-new-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskNameArray = [];

  newTaskListForm.addEventListener("submit", function (event){
    event.preventDefault();
    taskNameArray.push(newTaskDescription.value)

    //reset form:
    event.target.reset();
  });

  todoList.addEventListener("click", function (event){
    if (event.target.nodeName === "BUTTON"){

    }
  });

  refreshTodoList() {
    let innerHtml = "";
    for (let i = 0; i < todoList.length(); i++) {
      const newTask = document.createElement("li");
      newTask.innerHtml = `${newTaskDescription.value} <button data-description="${this.description}">X</button>`;
      todoList.appendChild(newTask);
    }
    todoList.innerHtml = innerHtml
  }
});
