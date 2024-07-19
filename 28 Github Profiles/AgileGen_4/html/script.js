
function searchUser() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(user => {
            const userInfoDiv = document.getElementById('user-info');
            userInfoDiv.innerHTML = `
                <img src="${user.avatar_url}" alt="Profile Picture" style="width: 100px; height: 100px;">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
            `;

            return fetch(user.repos_url);
        })
        .then(response => response.json())
        .then(repos => {
            const reposDiv = document.getElementById('repositories');
            reposDiv.innerHTML = '<h3>Repositories</h3>';
            repos.forEach(repo => {
                reposDiv.innerHTML += `<p><a href="${repo.html_url}" target="_blank">${repo.name}</a></p>`;
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch user data');
        });
}
