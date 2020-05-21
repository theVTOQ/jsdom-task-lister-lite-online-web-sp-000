document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementByTagName("ul");
  const newTaskListForm = document.getElementById("create-new-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  submitButton.addEventListener("submit", function (event){
    event.preventDefault();
    const newListButton = document.createElement("li");
    newListButton.innerHtml = newTaskDescription.value;
    todoList.appendChild(newListButton);
  });
});
