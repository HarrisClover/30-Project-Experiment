
function searchUser() {
    var username = document.getElementById('username').value;
    fetch('https://api.github.com/users/' + username)
        .then(response => response.json())
        .then(data => {
            document.getElementById('user-info').innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
            `;
        });

    fetch('https://api.github.com/users/' + username + '/repos')
        .then(response => response.json())
        .then(data => {
            var repoList = document.getElementById('repo-list');
            repoList.innerHTML = '';
            for (var i = 0; i < data.length; i++) {
                var li = document.createElement('li');
                li.textContent = data[i].name;
                repoList.appendChild(li);
            }
        });
}
