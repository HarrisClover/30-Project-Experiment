function filterUsers() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const userList = document.getElementById('userList');
    const users = userList.getElementsByTagName('li');

    for (let i = 0; i < users.length; i++) {
        const name = users[i].getAttribute('data-name').toLowerCase();
        const location = users[i].getAttribute('data-location').toLowerCase();
        if (name.includes(filter) || location.includes(filter)) {
            users[i].style.display = '';
        } else {
            users[i].style.display = 'none';
        }
    }
}