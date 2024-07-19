
const userList = [
  { name: "John Doe", location: "New York" },
  { name: "Jane Smith", location: "Los Angeles" },
  { name: "Mike Johnson", location: "Chicago" },
  { name: "Emily Davis", location: "San Francisco" },
  { name: "David Brown", location: "Seattle" },
];

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const userListElement = document.getElementById("user-list");

function displayUserList(users) {
  userListElement.innerHTML = "";
  if (users.length === 0) {
    const noResultsElement = document.createElement("li");
    noResultsElement.classList.add("no-results");
    noResultsElement.textContent = "No results found.";
    userListElement.appendChild(noResultsElement);
  } else {
    users.forEach((user) => {
      const userItem = document.createElement("li");
      userItem.classList.add("user-item");
      userItem.innerHTML = `<span>Name: ${user.name}</span><br><span>Location: ${user.location}</span>`;
      userListElement.appendChild(userItem);
    });
  }
}

function searchUsers() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = userList.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm) || user.location.toLowerCase().includes(searchTerm);
  });
  displayUserList(filteredUsers);
}

searchButton.addEventListener("click", searchUsers);
