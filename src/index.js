document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // initialize taskList class
 const taskList = new TaskList();
 //grab all the necessary DOM elements

 //form and relevant input fields
 const newTaskForm = document.getElementById("create-task-form");
 const newTaskDescription = document.getElementById("new-task-description");
 const newTaskPriority = document.getElementById("new-task-priority");

 //ul where new tasks will live on the DOM
 const taskUl = document.getElementById("tasks");

 const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
 //attach event listeners

 newTaskForm.addEventListener("submit", (e) => {
   e.preventDefault();
   taskList.createNewTask(newTaskDescription.value);
   // reset form
   e.target.reset();
   renderApp();
 });

 taskUl.addEventListener("click", (e) => {
   if (e.target.nodeName === "BUTTON") {
     taskList.deleteTask(e.target.dataset.description);
     renderApp();
   }
 });

  //my first pass, wherein storing task descriptions in an array proved impossible for some reason
  // const todoList = document.getElementById("tasks");
  // const newTaskListForm = document.getElementById("create-task-form");
  // const newTaskDescription = document.getElementById("new-task-description");
  // let taskDescriptionArray = [];
  //
  // function refreshTodoList(){
  //   let innerHtmlForList = "";
  //   for (let i = 0; i < taskDescriptionArray.length; i++) {
  //     innerHtmlForList += `<li>${taskDescriptionArray[i]} <button data-description="${taskDescriptionArray[i]}">X</button></li>`;
  //   }
  //   todoList.innerHtml = innerHtmlForList;
  // }
  //
  // newTaskListForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   taskDescriptionArray.push(newTaskDescription.value)
  //   refreshTodoList();
  //   //reset form:
  //   event.target.reset();
  // });
  //
  // todoList.addEventListener("click", function (event){
  //   if (event.target.nodeName === "BUTTON"){
  //     taskDescriptionArray = taskDescriptionArray.filter((value) => value !== event.target.dataset.description)
  //   }
  //   refreshTodoList();
  // });
});
