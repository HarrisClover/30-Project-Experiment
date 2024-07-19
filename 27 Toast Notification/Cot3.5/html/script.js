
// Get the button and notification container elements
const showNotificationsBtn = document.getElementById('showNotificationsBtn');
const notificationContainer = document.getElementById('notificationContainer');

// Create an array to store the messages
let messages = [];

// Function to display notifications in chronological order
function displayNotifications() {
  // Sort the messages array in chronological order
  messages.sort((a, b) => a.timestamp - b.timestamp);

  // Clear the notification container
  notificationContainer.innerHTML = '';

  // Loop through the sorted messages and display them
  for (const message of messages) {
    const notification = document.createElement('div');
    notification.textContent = message.text;
    notificationContainer.appendChild(notification);
  }
}

// Event listener for the button click
showNotificationsBtn.addEventListener('click', displayNotifications);

// Function to add a new message to the array
function addMessage(text) {
  const message = {
    text: text,
    timestamp: Date.now() // Store the current timestamp
  };
  messages.push(message);
}

// Example usage: add a new message
addMessage('This is the first message');
addMessage('This is the second message');
