
document.getElementById('playstation').addEventListener('mouseover', function() {
    this.style.flexGrow = '2';
    document.getElementById('xbox').style.flexGrow = '1';
});

document.getElementById('xbox').addEventListener('mouseover', function() {
    this.style.flexGrow = '2';
    document.getElementById('playstation').style.flexGrow = '1';
});

document.getElementById('playstation').addEventListener('mouseout', function() {
    this.style.flexGrow = '1';
    document.getElementById('xbox').style.flexGrow = '1';
});

document.getElementById('xbox').addEventListener('mouseout', function() {
    this.style.flexGrow = '1';
    document.getElementById('playstation').style.flexGrow = '1';
});
