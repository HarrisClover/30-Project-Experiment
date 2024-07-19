
document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('newTask');
    if (taskInput.value.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"><span>${taskInput.value}</span><button class="delete">Delete</button>`;
        taskList.appendChild(li);
        saveTasks();
        taskInput.value = '';
    }
});

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
        e.target.parentElement.remove();
        saveTasks();
    } else if (e.target.type === 'checkbox') {
        saveTasks();
    }
});

document.getElementById('clearCompleted').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        checkbox.parentElement.remove();
    });
    saveTasks();
});

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            text: li.textContent.replace('Delete', '').trim(),
            completed: li.querySelector('input').checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" ${task.completed ? 'checked' : ''}><span>${task.text}</span><button class="delete">Delete</button>`;
        taskList.appendChild(li);
    });
}

window.onload = loadTasks;
