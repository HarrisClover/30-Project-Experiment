document.getElementById('add-note').addEventListener('click', function() {
    var noteText = document.getElementById('note-text').value;
    var note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = noteText + '<button class="delete-note">Delete</button>';
    document.getElementById('notes-display').appendChild(note);
    document.getElementById('note-text').value = '';
});

document.getElementById('notes-display').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-note')) {
        e.target.parentElement.remove();
    }
});
