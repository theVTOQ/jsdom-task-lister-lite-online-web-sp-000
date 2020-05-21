document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementByTagName("ul");
  const newTaskListForm = document.getElementById("create-new-task-form");
  const submitButton = document.getElementByTagName("sumbit");

  submitButton.addEventListener("submit", function (event){
    event.preventDefault();
    const newListButton = document.createElement("li");
    newListButton.innerHtml = event.text;
    todoList.appendChild(newListButton)
  });
});
