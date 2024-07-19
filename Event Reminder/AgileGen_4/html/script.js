
function showAddEvent() {
    document.getElementById('addEvent').style.display = 'block';
    document.getElementById('myEvents').style.display = 'none';
    document.getElementById('myCalendar').style.display = 'none';
}

function showMyEvents() {
    document.getElementById('addEvent').style.display = 'none';
    document.getElementById('myEvents').style.display = 'block';
    document.getElementById('myCalendar').style.display = 'none';
}

function showCalendar() {
    document.getElementById('addEvent').style.display = 'none';
    document.getElementById('myEvents').style.display = 'none';
    document.getElementById('myCalendar').style.display = 'block';
}

function addEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;

    if (eventName && eventDate && eventTime && eventLocation) {
        const eventsList = document.getElementById('eventsList');
        const newEvent = document.createElement('li');
        newEvent.textContent = `${eventName} - ${eventDate} ${eventTime} at ${eventLocation}`;
        eventsList.appendChild(newEvent);

        document.getElementById('confirmationMessage').textContent = "Reminder set successfully.";
    } else {
        document.getElementById('confirmationMessage').textContent = "Please fill all fields.";
    }

    document.getElementById('eventForm').reset();
}
