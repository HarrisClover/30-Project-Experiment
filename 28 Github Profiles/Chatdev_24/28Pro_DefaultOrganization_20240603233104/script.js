function searchUser() {
    var username = document.getElementById("usernameInput").value;
    var url = "https://api.github.com/users/" + username;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayUserInfo(data);
            displayRepoList(username);
        })
        .catch(error => {
            console.log(error);
            alert("Error occurred while fetching user data.");
        });
}
function displayUserInfo(user) {
    var userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `
        <h2>${user.name ?? 'N/A'}</h2>
        <p><strong>Username:</strong> ${user.login ?? 'N/A'}</p>
        <p><strong>Location:</strong> ${user.location ?? 'N/A'}</p>
        <p><strong>Followers:</strong> ${user.followers ?? 'N/A'}</p>
        <p><strong>Following:</strong> ${user.following ?? 'N/A'}</p>
    `;
}
function displayRepoList(username) {
    var url = "https://api.github.com/users/" + username + "/repos";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var repoList = document.getElementById("repoList");
            repoList.innerHTML = "";
            data.forEach(repo => {
                var li = document.createElement("li");
                li.textContent = repo.name;
                repoList.appendChild(li);
            });
        })
        .catch(error => {
            console.log(error);
            alert("Error occurred while fetching repository list.");
        });
}