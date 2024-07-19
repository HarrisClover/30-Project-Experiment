// Get the form and note list elements
const noteForm = document.getElementById('note-form');
const noteList = document.getElementById('note-list');
// Add event listener to the form submit event
noteForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get the note input value
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        // Create a new list item for the note
        const listItem = document.createElement('li');
        listItem.textContent = noteText;
        // Append the list item to the note list
        noteList.appendChild(listItem);
        // Clear the note input value
        noteInput.value = '';
    } else {
        // Show an error message or perform any other desired action
        alert('Please enter a valid note');
    }
});