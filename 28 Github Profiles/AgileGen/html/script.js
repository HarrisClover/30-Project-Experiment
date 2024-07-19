


const homepage = document.getElementById('homepage');
const userProfile = document.getElementById('user-profile');
const errorPage = document.getElementById('error-page');
const searchBtn = document.getElementById('search');
const backBtn = document.getElementById('back');
const backErrorBtn = document.getElementById('back-error');

searchBtn.addEventListener('click', searchUser);
backBtn.addEventListener('click', goBack);
backErrorBtn.addEventListener('click', goBack);

function searchUser() {
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        showError('Please enter a Github username.');
    } else {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('User not found.');
                }
            })
            .then(user => {
                showUserProfile(user);
                fetchRepositories(username);
            })
            .catch(() => {
                showError('User not found. Please try again.');
            });
    }
}

function showUserProfile(user) {
    homepage.classList.add('hidden');
    userProfile.classList.remove('hidden');
    errorPage.classList.add('hidden');

    document.getElementById('profile-pic').src = user.avatar_url;
    document.getElementById('name').textContent = user.name;
    document.getElementById('location').textContent = user.location;
    document.getElementById('bio').textContent = user.bio;
}

function fetchRepositories(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            document.getElementById('repository-count').textContent = `Repositories: ${repos.length}`;
            const repoList = document.getElementById('repository-list');
            repoList.innerHTML = '';

            repos.forEach(repo => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.textContent = repo.name;
                link.target = '_blank';
                listItem.appendChild(link);
                repoList.appendChild(listItem);
            });
        });
}

function showError(message) {
    homepage.classList.add('hidden');
    userProfile.classList.add('hidden');
    errorPage.classList.remove('hidden');

    document.getElementById('error-message').textContent = message;
}

function goBack() {
    homepage.classList.remove('hidden');
    userProfile.classList.add('hidden');
    errorPage.classList.add('hidden');
}
