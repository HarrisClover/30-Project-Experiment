
// Function to format text in the text area
function format(command) {
    document.execCommand(command, false, null);
}

// Event listener for the "New Note" button
document.getElementById('new-note-btn').addEventListener('click', function() {
    document.getElementById('text-area').innerHTML = '';
    document.getElementById('text-area').focus();
});

// Event listener for the "Save Note" button
document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteContent = document.getElementById('text-area').innerHTML;
    if (noteContent.trim() !== '') {
        alert('Note saved successfully!');
        // Here you can add code to save the note content to local storage or a database
    } else {
        alert('Cannot save an empty note.');
    }
});
