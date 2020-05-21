document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementByTagName("ul");
  const newTaskListForm = document.getElementById("create-new-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskNameArray = [];

  newTaskListForm.addEventListener("submit", function (event){
    event.preventDefault();
    taskNameArray.push(newTaskDescription.value)
    refreshTodoList();
    //reset form:
    event.target.reset();
  });

  todoList.addEventListener("click", function (event){
    if (event.target.nodeName === "BUTTON"){
      taskNameArray = taskNameArray.filter((value) => value !=== event.target.dataset.description)
    }
    refreshTodoList();
  });

  refreshTodoList() {
    let innerHtmlForList = "";
    for (let i = 0; i < taskNameArray.length; i++) {
      innerHtml += `<li>${taskNameArray[i]} <button data-description="${taskNameArray[i]}">X</button></li>`;
    }
    todoList.innerHtml = innerHtmlForList;
  }
});
