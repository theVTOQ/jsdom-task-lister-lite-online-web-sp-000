document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementByTagName("ul");
  const newTaskListForm = document.getElementById("create-new-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  newTaskListForm.addEventListener("submit", function (event){
    event.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerHtml = `${newTaskDescription.value} <button data-description="${this.description}">X</button>`;
    todoList.appendChild(newTask);
    //reset form:
    event.target.reset();
  });

  
});
