document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const todoList = document.getElementByTagName("ul");
  const submitButton = document.getElementByTagName("sumbit");

  submitButton.addEventListener("submit", function (event){
    event.preventDefault();
    const newListButton = document.createElement("li");
    newListButton.innerHtml = event.text;
    todoList.appendChild(newListButton)
  });
});
