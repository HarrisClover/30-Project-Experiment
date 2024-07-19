
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const inputField = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    loadTasks();

    addButton.addEventListener('click', () => {
        addTask(inputField.value);
    });

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    }

    function addTask(taskText) {
        if (taskText.trim() === '') return;
        createTaskElement(taskText, false);
        saveTask(taskText, false);
        inputField.value = '';
    }

    function createTaskElement(text, completed) {
        const li = document.createElement('li');
        li.textContent = text;
        if (completed) {
            li.classList.add('completed');
        }

        li.addEventListener('click', () => toggleComplete(li));
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            deleteTask(li);
        });

        taskList.appendChild(li);
    }

    function saveTask(text, completed) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text, completed });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleComplete(li) {
        li.classList.toggle('completed');
        updateTask(li.textContent, li.classList.contains('completed'));
    }

    function updateTask(text, completed) {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskIndex = tasks.findIndex(task => task.text === text);
        tasks[taskIndex].completed = completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTask(li) {
        taskList.removeChild(li);
        removeTask(li.textContent);
    }

    function removeTask(text) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks = tasks.filter(task => task.text !== text);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
