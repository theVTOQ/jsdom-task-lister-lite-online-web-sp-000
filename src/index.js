document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementById("tasks");
  const newTaskListForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskDescriptionArray = [];

  function refreshTodoList(){
    let innerHtmlForList = "";
    for (let i = 0; i < taskDescriptionArray.length; i++) {
      innerHtmlForList += `<li>${taskDescriptionArray[i]} <button data-description="${taskDescriptionArray[i]}">X</button></li>`;
    }
    todoList.innerHtml = innerHtmlForList;
  }

  newTaskListForm.addEventListener("submit", function (event){
    event.preventDefault();
    taskDescriptionArray.push(newTaskDescription.value)
    refreshTodoList();
    //reset form:
    event.target.reset();
  });

  todoList.addEventListener("click", function (event){
    if (event.target.nodeName === "BUTTON"){
      taskDescriptionArray = taskDescriptionArray.filter((value) => value !== event.target.dataset.description)
    }
    refreshTodoList();
  });
});
