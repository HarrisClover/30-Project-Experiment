
var notifications = [];

function displayNotifications() {
  var notificationsList = document.getElementById("notificationsList");
  notificationsList.innerHTML = "";
  
  for (var i = notifications.length - 1; i >= 0; i--) {
    var li = document.createElement("li");
    li.textContent = notifications[i];
    notificationsList.appendChild(li);
  }
}

function addNotification(message) {
  notifications.push(message);
  displayNotifications();
}

function removeNotification(index) {
  notifications.splice(index, 1);
  displayNotifications();
}

document.getElementById("showNotificationsButton").addEventListener("click", function() {
  addNotification("New notification");
});

addNotification("Notification 1");
addNotification("Notification 2");
addNotification("Notification 3");
