
document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes-list');
    const noteForm = document.getElementById('note-form');
    const newNoteBtn = document.getElementById('new-note-btn');
    const saveNoteBtn = document.getElementById('save-note-btn');
    const cancelNoteBtn = document.getElementById('cancel-note-btn');
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    let currentNoteId = null;

    const renderNotes = () => {
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteItem = document.createElement('div');
            noteItem.className = 'note-item';
            noteItem.innerText = note.title;
            noteItem.addEventListener('click', () => editNote(index));
            notesList.appendChild(noteItem);
        });
    };

    const saveNote = () => {
        const title = noteTitle.value;
        const content = noteContent.value;

        if (currentNoteId !== null) {
            notes[currentNoteId] = { title, content };
        } else {
            notes.push({ title, content });
        }

        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
        toggleNoteForm();
    };

    const editNote = (index) => {
        currentNoteId = index;
        noteTitle.value = notes[index].title;
        noteContent.value = notes[index].content;
        toggleNoteForm();
    };

    const toggleNoteForm = () => {
        noteForm.classList.toggle('hidden');
        notesList.classList.toggle('hidden');
        newNoteBtn.classList.toggle('hidden');
    };

    newNoteBtn.addEventListener('click', () => {
        currentNoteId = null;
        noteTitle.value = '';
        noteContent.value = '';
        toggleNoteForm();
    });

    saveNoteBtn.addEventListener('click', saveNote);
    cancelNoteBtn.addEventListener('click', toggleNoteForm);

    renderNotes();
});
