
const users = [
    { name: "John Doe", location: "New York" },
    { name: "Jane Smith", location: "Los Angeles" },
    { name: "John Smith", location: "New York" },
    { name: "Jane Doe", location: "Chicago" }
];

function searchUsers() {
    const nameInput = document.getElementById('nameInput').value.toLowerCase();
    const locationInput = document.getElementById('locationInput').value.toLowerCase();
    const resultsSection = document.getElementById('results-section');

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(nameInput) && user.location.toLowerCase().includes(locationInput);
    });

    if (filteredUsers.length > 0) {
        const userList = filteredUsers.map(user => `<li>${user.name} - ${user.location}</li>`).join('');
        resultsSection.innerHTML = `<ul>${userList}</ul>`;
    } else {
        resultsSection.innerHTML = 'No users found';
    }
}
