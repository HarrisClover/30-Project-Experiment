
const usernameInput = document.getElementById('username-input');
const searchButton = document.getElementById('search-button');
const userInfoContainer = document.getElementById('user-info-container');
const repositoryListContainer = document.getElementById('repository-list-container');

searchButton.addEventListener('click', searchUser);
usernameInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchUser();
  }
});

function searchUser() {
  const username = usernameInput.value;
  if (username.trim() === '') {
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Not Found') {
        displayErrorMessage('User not found');
      } else {
        displayUserInfo(data);
        fetchRepositories(username);
      }
    })
    .catch(error => {
      displayErrorMessage('An error occurred');
    });
}

function fetchRepositories(username) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
      displayRepositoryList(data);
    })
    .catch(error => {
      displayErrorMessage('An error occurred');
    });
}

function displayUserInfo(user) {
  userInfoContainer.innerHTML = `
    <img src="${user.avatar_url}" alt="User Avatar" class="avatar">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <p>Followers: ${user.followers}</p>
    <p>Following: ${user.following}</p>
    <p>Public Repositories: ${user.public_repos}</p>
  `;
}

function displayRepositoryList(repositories) {
  repositoryListContainer.innerHTML = '';
  repositories.forEach(repository => {
    const repositoryElement = document.createElement('div');
    repositoryElement.classList.add('repository');
    repositoryElement.innerHTML = `
      <h3>${repository.name}</h3>
      <p>${repository.description}</p>
      <p>Language: ${repository.language}</p>
      <p>Stars: ${repository.stargazers_count}</p>
    `;
    repositoryListContainer.appendChild(repositoryElement);
  });
}

function displayErrorMessage(message) {
  userInfoContainer.innerHTML = '';
  repositoryListContainer.innerHTML = '';
  const errorMessageElement = document.createElement('p');
  errorMessageElement.classList.add('error-message');
  errorMessageElement.textContent = message;
  userInfoContainer.appendChild(errorMessageElement);
}
