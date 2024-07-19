document.getElementById('show-notifications').addEventListener('click', function() {
    fetch('/notifications')
        .then(response => response.json())
        .then(notifications => {
            const container = document.getElementById('notifications-container');
            container.innerHTML = '';
            notifications.forEach(notification => {
                const div = document.createElement('div');
                div.textContent = `${notification.timestamp}: ${notification.message}`;
                container.appendChild(div);
            });
        });
});
