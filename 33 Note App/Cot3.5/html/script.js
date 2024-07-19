
// Array to store notes
let notes = [];

// Function to render notes list
function renderNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note.title;
        li.addEventListener('click', () => {
            editNote(index);
        });
        notesList.appendChild(li);
    });
}

// Function to add a new note
function addNote() {
    const noteTitle = document.getElementById('note-title').value;
    const noteContent = document.getElementById('note-content').value;

    if (noteTitle && noteContent) {
        const note = {
            title: noteTitle,
            content: noteContent
        };

        notes.push(note);
        renderNotes();
        clearNoteEditor();
    }
}

// Function to edit a note
function editNote(index) {
    const note = notes[index];
    document.getElementById('note-title').value = note.title;
    document.getElementById('note-content').value = note.content;
}

// Function to clear note editor
function clearNoteEditor() {
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
}

// Event listener for save note button
document.getElementById('save-note').addEventListener('click', addNote);

// Initial rendering of notes list
renderNotes();
