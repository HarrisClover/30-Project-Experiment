
document.getElementById('show-notifications').addEventListener('click', function() {
    var notifications = fetchNotifications();
    notifications.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    var notificationsDiv = document.getElementById('notifications');
    notificationsDiv.innerHTML = '';
    for (var i = 0; i < notifications.length; i++) {
        notificationsDiv.innerHTML += '<p>' + notifications[i].message + '</p>';
    }
});

function fetchNotifications() {
    return [
        { message: 'Notification 1', date: '2022-01-01' },
        { message: 'Notification 2', date: '2022-01-02' },
        { message: 'Notification 3', date: '2022-01-03' },
    ];
}
