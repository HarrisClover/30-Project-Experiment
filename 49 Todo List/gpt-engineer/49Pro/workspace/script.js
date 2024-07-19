document.getElementById('add-task').addEventListener('click', function() {
    var value = document.getElementById('new-task').value;
    if (value) {
        addTask(value);
        document.getElementById('new-task').value = '';
    }
});

function addTask(text) {
    var list = document.getElementById('task-list');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', deleteTask);

    buttons.appendChild(deleteButton);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}

function deleteTask() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
}

var list = document.getElementById('task-list');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
