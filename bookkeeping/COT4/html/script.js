
// Event list array to store events
let eventList = [];

// Event form submit event listener
document.getElementById('eventForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  let title = document.getElementById('title').value;
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  let description = document.getElementById('description').value;
  
  // Create event object
  let event = {
    title: title,
    date: date,
    time: time,
    description: description
  };
  
  // Add event to event list
  eventList.push(event);
  
  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
  document.getElementById('description').value = '';
  
  // Render event list
  renderEventList();
});

// Function to render event list
function renderEventList() {
  let eventListContainer = document.getElementById('eventList');
  eventListContainer.innerHTML = ''; // Clear existing event list
  
  // Loop through event list and create event elements
  for (let i = 0; i < eventList.length; i++) {
    let event = eventList[i];
    
    // Create event element
    let eventElement = document.createElement('div');
    eventElement.classList.add('event');
    
    // Create event title element
    let titleElement = document.createElement('h2');
    titleElement.textContent = event.title;
    
    // Create event date and time element
    let dateTimeElement = document.createElement('p');
    dateTimeElement.textContent = event.date + ' ' + event.time;
    
    // Create event description element
    let descriptionElement = document.createElement('p');
    descriptionElement.textContent = event.description;
    
    // Create delete button element
    let deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', function() {
      deleteEvent(i);
    });
    
    // Append elements to event element
    eventElement.appendChild(titleElement);
    eventElement.appendChild(dateTimeElement);
    eventElement.appendChild(descriptionElement);
    eventElement.appendChild(deleteButtonElement);
    
    // Append event element to event list container
    eventListContainer.appendChild(eventElement);
  }
}

// Function to delete event
function deleteEvent(index) {
  eventList.splice(index, 1); // Remove event from event list
  renderEventList(); // Re-render event list
}

// Initial render of event list
renderEventList();
