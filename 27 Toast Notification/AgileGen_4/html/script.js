
document.getElementById('showNotifications').addEventListener('click', function() {
    const notifications = [
        { id: 3, message: "New update available!" },
        { id: 2, message: "Your session will expire soon." },
        { id: 1, message: "Welcome to the notifications page!" }
    ];

    notifications.sort((a, b) => b.id - a.id); // Sort by id descending to simulate chronological order

    const displayArea = document.getElementById('notificationsDisplayArea');
    displayArea.innerHTML = ''; // Clear previous notifications
    displayArea.style.display = 'block'; // Make the display area visible

    notifications.forEach(notification => {
        const div = document.createElement('div');
        div.textContent = notification.message;
        displayArea.appendChild(div);
    });
});
