document.getElementById("eventForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form values
  var eventTitle = document.getElementById("eventTitle").value;
  var eventDate = document.getElementById("eventDate").value;
  var eventTime = document.getElementById("eventTime").value;
  var eventLocation = document.getElementById("eventLocation").value;
  var eventNotes = document.getElementById("eventNotes").value;
  
  // Save event to local storage
  var events = JSON.parse(localStorage.getItem("events")) || [];
  events.push({title: eventTitle, date: eventDate, time: eventTime, location: eventLocation, notes: eventNotes});
  localStorage.setItem("events", JSON.stringify(events));
  
  // Update the list of events
  loadEvents();
});

function loadEvents() {
  var events = JSON.parse(localStorage.getItem("events")) || [];
  var eventList = document.getElementById("eventList");
  eventList.innerHTML = "";
  events.forEach(function(event, index) {
    var button = document.createElement("button");
    button.textContent = event.title;
    button.addEventListener("click", function() {
      displayEvent(index);
    });
    eventList.appendChild(button);
  });
}

function displayEvent(index) {
  var events = JSON.parse(localStorage.getItem("events")) || [];
  var event = events[index];
  var eventDetails = document.getElementById("eventDetails");
  eventDetails.textContent = "Title: " + event.title + "\nDate: " + event.date + "\nTime: " + event.time + "\nLocation: " + event.location + "\nNotes: " + event.notes;
}

// Load the events when the page is loaded
window.addEventListener("load", loadEvents);
