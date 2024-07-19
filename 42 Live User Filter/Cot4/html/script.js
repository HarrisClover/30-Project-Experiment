
let users = [
    // This is where the user data will be stored
];

// Fetch user data from the database
// This is just a placeholder, replace with actual fetch code
fetch('path/to/database')
    .then(response => response.json())
    .then(data => users = data);

document.getElementById('search-input').addEventListener('input', (e) => {
    let searchValue = e.target.value.toLowerCase();
    let filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchValue) || 
        user.location.toLowerCase().includes(searchValue)
    );
    displayUsers(filteredUsers);
});

function displayUsers(users) {
    let userList = document.querySelector('.user-list');
    userList.innerHTML = '';
    users.forEach(user => {
        let userElement = document.createElement('div');
        userElement.textContent = `${user.name}, ${user.location}`;
        userList.appendChild(userElement);
    });
}
