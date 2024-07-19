document.getElementById('search').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    fetch('https://api.github.com/users/' + username)
        .then(response => response.json())
        .then(data => {
            var userInfo = document.getElementById('user-info');
            userInfo.innerHTML = '<h2>' + data.name + '</h2><p>' + data.bio + '</p>';
            fetch(data.repos_url)
                .then(response => response.json())
                .then(repos => {
                    var repoList = document.getElementById('repo-list');
                    repoList.innerHTML = '<h2>Repositories</h2><ul>';
                    repos.forEach(repo => {
                        repoList.innerHTML += '<li><a href="' + repo.html_url + '">' + repo.name + '</a></li>';
                    });
                    repoList.innerHTML += '</ul>';
                });
        });
});
