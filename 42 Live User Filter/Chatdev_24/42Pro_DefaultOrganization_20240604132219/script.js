function searchUsers() {
    var searchInput = document.getElementById("search").value.toLowerCase();
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    fetch("users.json")
        .then(response => response.json())
        .then(users => {
            var filteredUsers = users.filter(user => {
                return user.name.toLowerCase().includes(searchInput) || user.location.toLowerCase().includes(searchInput);
            });
            if (filteredUsers.length > 0) {
                var resultsText = "Results:<br>";
                filteredUsers.forEach(user => {
                    resultsText += "Name: " + user.name + ", Location: " + user.location + "<br>";
                });
            } else {
                var resultsText = "No results found.";
            }
            resultsDiv.innerHTML = resultsText;
        })
        .catch(error => {
            console.error("Error:", error);
            resultsDiv.innerHTML = "An error occurred while fetching user data.";
        });
}