import time

def get_notifications():
    # For simplicity, we will return a static list of notifications.
    # In a real application, these would probably come from a database.
    notifications = [
        {'time': time.time() - 60, 'message': 'Notification 1'},
        {'time': time.time() - 120, 'message': 'Notification 2'},
        {'time': time.time() - 180, 'message': 'Notification 3'},
    ]

    # Sort the notifications in reverse chronological order.
    notifications.sort(key=lambda x: x['time'], reverse=True)

    return notifications
