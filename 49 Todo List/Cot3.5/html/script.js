
document.addEventListener("DOMContentLoaded", function() {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", function() {
    const todoText = todoInput.value;
    if (todoText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = todoText;
      todoList.appendChild(listItem);
      todoInput.value = "";
    }
  });

  todoList.addEventListener("click", function(event) {
    const clickedItem = event.target;
    if (clickedItem.tagName === "LI") {
      clickedItem.classList.toggle("completed");
    } else if (clickedItem.classList.contains("delete-button")) {
      const listItem = clickedItem.parentElement;
      todoList.removeChild(listItem);
    }
  });
});
