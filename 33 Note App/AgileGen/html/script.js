// Add event listeners to buttons
const editButtons = document.querySelectorAll('.edit-button');
const deleteButtons = document.querySelectorAll('.delete-button');
const viewButtons = document.querySelectorAll('.view-button');
const addNoteButton = document.querySelector('#add-note-button');

editButtons.forEach(button => {
    button.addEventListener('click', handleEdit);
});

deleteButtons.forEach(button => {
    button.addEventListener('click', handleDelete);
});

viewButtons.forEach(button => {
    button.addEventListener('click', handleView);
});

addNoteButton.addEventListener('click', handleAddNote);

// Handle edit button click
function handleEdit() {
    // Get note title and content
    const noteTitle = this.parentNode.parentNode.querySelector('.note-title').textContent;
    const noteContent = prompt(`Edit note "${noteTitle}":`, '');

    // Update note content
    if (noteContent !== null) {
        this.parentNode.parentNode.querySelector('.note-content').textContent = noteContent;
    }
}

// Handle delete button click
function handleDelete() {
    // Confirm deletion
    const noteTitle = this.parentNode.parentNode.querySelector('.note-title').textContent;
    const confirmDelete = confirm(`Are you sure you want to delete the note "${noteTitle}"?`);

    // Remove note from the list
    if (confirmDelete) {
        this.parentNode.parentNode.remove();
    }
}

// Handle view button click
function handleView() {
    // Get note title and content
    const noteTitle = this.parentNode.parentNode.querySelector('.note-title').textContent;
    const noteContent = this.parentNode.parentNode.querySelector('.note-content').textContent;

    // Display note content in a read-only view
    alert(`Note "${noteTitle}":\n\n${noteContent}`);
}

// Handle add note button click
function handleAddNote() {
    // Create a new note
    const noteList = document.querySelector('.note-list');
    const newNote = document.createElement('div');
    newNote.className = 'note';
    newNote.innerHTML = `
        <h2 class="note-title">New Note</h2>
        <p class="note-date">Date: <span class="date">2021-01-01</span></p>
        <p class="note-content">This is the note content.</p>
        <div class="note-actions">
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
            <button class="view-button">View</button>
        </div>
    `;

    // Add event listeners to the new note's buttons
    newNote.querySelector('.edit-button').addEventListener('click', handleEdit);
    newNote.querySelector('.delete-button').addEventListener('click', handleDelete);
    newNote.querySelector('.view-button').addEventListener('click', handleView);

    // Add the new note to the list
    noteList.appendChild(newNote);
}
