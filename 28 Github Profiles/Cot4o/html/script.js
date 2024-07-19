async function searchUser() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a GitHub username');
        return;
    }

    const userInfoDiv = document.getElementById('user-info');
    const repoListDiv = document.getElementById('repo-list');

    userInfoDiv.innerHTML = 'Loading...';
    repoListDiv.innerHTML = '';

    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
            throw new Error('User not found');
        }
        const userData = await userResponse.json();

        userInfoDiv.innerHTML = `
            <h2>${userData.name} (${userData.login})</h2>
            <img src="${userData.avatar_url}" alt="${userData.login}" width="100">
            <p>${userData.bio}</p>
            <p>Followers: ${userData.followers} - Following: ${userData.following}</p>
            <p>Public Repos: ${userData.public_repos}</p>
        `;

        const repoResponse = await fetch(userData.repos_url);
        const repoData = await repoResponse.json();

        repoData.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.className = 'repo';
            repoDiv.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description}</p>
            `;
            repoListDiv.appendChild(repoDiv);
        });
    } catch (error) {
        userInfoDiv.innerHTML = 'User not found';
    }
}