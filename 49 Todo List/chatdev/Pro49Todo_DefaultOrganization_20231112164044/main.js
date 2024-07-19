/*
This file contains the main logic of the to-do list application.
*/
// Function to retrieve the to-do list from local storage
function getTodoList() {
  let todoList = localStorage.getItem('todoList');
  if (todoList) {
    return JSON.parse(todoList);
  } else {
    return [];
  }
}
// Function to save the to-do list to local storage
function saveTodoList(todoList) {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
// Function to add a new to-do item
function addTodoItem(itemText) {
  let todoList = getTodoList();
  let newItem = {
    id: Date.now(),
    text: itemText,
    completed: false
  };
  todoList.push(newItem);
  saveTodoList(todoList);
}
// Function to mark a to-do item as completed
function markTodoItemCompleted(itemId) {
  let todoList = getTodoList();
  let itemIndex = todoList.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    todoList[itemIndex].completed = true;
    saveTodoList(todoList); // Save the updated list
  }
}
// Function to delete a to-do item
function deleteTodoItem(itemId) {
  let todoList = getTodoList();
  let updatedList = todoList.filter(item => item.id !== itemId);
  saveTodoList(updatedList);
}
// Function to render the to-do list
function renderTodoList() {
  let todoList = getTodoList();
  let todoListContainer = document.getElementById('todoListContainer');
  todoListContainer.innerHTML = '';
  todoList.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = item.text;
    if (item.completed) {
      listItem.classList.add('completed');
    }
    let completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
      markTodoItemCompleted(item.id);
      renderTodoList();
    });
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodoItem(item.id);
      renderTodoList();
    });
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    todoListContainer.appendChild(listItem);
  });
}
// Event listener for the form submission
document.getElementById('todoForm').addEventListener('submit', event => {
  event.preventDefault();
  let itemText = document.getElementById('todoInput').value;
  addTodoItem(itemText);
  renderTodoList();
  document.getElementById('todoInput').value = '';
});
// Initial rendering of the to-do list
renderTodoList();