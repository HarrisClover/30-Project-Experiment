
document.addEventListener('DOMContentLoaded', () => {
    const showNotificationsBtn = document.getElementById('showNotificationsBtn');
    const notificationsContainer = document.getElementById('notificationsContainer');

    const messages = [
        { id: 1, text: 'Message 1', timestamp: '2023-10-01T10:00:00Z' },
        { id: 2, text: 'Message 2', timestamp: '2023-10-01T11:00:00Z' },
        { id: 3, text: 'Message 3', timestamp: '2023-10-01T12:00:00Z' }
    ];

    showNotificationsBtn.addEventListener('click', () => {
        displayNotifications(messages);
    });

    function displayNotifications(messages) {
        // Sort messages by timestamp in ascending order
        messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

        // Clear the container
        notificationsContainer.innerHTML = '';

        // Display each message
        messages.forEach(message => {
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification';
            notificationElement.textContent = `${message.text} (Received at: ${new Date(message.timestamp).toLocaleString()})`;
            notificationsContainer.appendChild(notificationElement);
        });
    }
});
