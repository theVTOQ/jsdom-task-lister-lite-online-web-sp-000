document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementByTagName("ul");
  const newTaskListForm = document.getElementById("create-new-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskDescriptionArray = [];

  newTaskListForm.addEventListener("submit", function (event){
    event.preventDefault();
    taskDescriptionArray.push(newTaskDescription.value)
    refreshTodoList();
    //reset form:
    event.target.reset();
  });

  todoList.addEventListener("click", function (event){
    if (event.target.nodeDescription === "BUTTON"){
      taskDescriptionArray = taskDescriptionArray.filter((value) => value !=== event.target.dataset.description)
    }
    refreshTodoList();
  });

  refreshTodoList() {
    let innerHtmlForList = "";
    for (let i = 0; i < taskDescriptionArray.length; i++) {
      innerHtml += `<li>${taskDescriptionArray[i]} <button data-description="${taskDescriptionArray[i]}">X</button></li>`;
    }
    todoList.innerHtml = innerHtmlForList;
  }
});
