// Retrieve tasks from local storage or initialize an empty array
let tasks = [];
try {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
} catch (error) {
    console.error('Error retrieving tasks from local storage:', error);
}
// Function to render the tasks on the page
function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            toggleTaskCompletion(index);
        });
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.addEventListener('click', () => {
            toggleTaskCompletion(index);
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        if (task.completed) {
            listItem.classList.add('completed');
        }
        todoList.appendChild(listItem);
    });
}
// Function to add a new task
function addTask() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text !== '') {
        const newTask = {
            text: text,
            completed: false
        };
        tasks.push(newTask);
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to local storage:', error);
        }
        input.value = '';
        renderTasks();
    }
}
// Function to toggle task completion
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks(); // Move the call to renderTasks inside the try block
    } catch (error) {
        console.error('Error saving tasks to local storage:', error);
    }
}
// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks(); // Move the call to renderTasks inside the try block
    } catch (error) {
        console.error('Error saving tasks to local storage:', error);
    }
}
// Event listener for add button
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addTask);
// Initial rendering of tasks
renderTasks();