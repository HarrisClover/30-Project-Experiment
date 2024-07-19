
document.getElementById('addNote').addEventListener('click', function() {
    var noteInput = document.getElementById('noteInput');
    var note = noteInput.value;
    noteInput.value = '';

    var noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.textContent = note;

    document.getElementById('notesContainer').appendChild(noteElement);
});
