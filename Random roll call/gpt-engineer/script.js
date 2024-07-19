document.getElementById('roll-call-button').addEventListener('click', function() {
    var names = ['John', 'Jane', 'Bob', 'Alice', 'Tom', 'Emily'];
    var randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById('random-name').textContent = names[randomIndex];
});