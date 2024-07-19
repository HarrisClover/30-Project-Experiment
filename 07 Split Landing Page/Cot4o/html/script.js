
const playstation = document.getElementById('playstation');
const xbox = document.getElementById('xbox');

playstation.addEventListener('mouseenter', () => {
    playstation.style.width = '75%';
    xbox.style.width = '25%';
});

playstation.addEventListener('mouseleave', () => {
    playstation.style.width = '50%';
    xbox.style.width = '50%';
});

xbox.addEventListener('mouseenter', () => {
    xbox.style.width = '75%';
    playstation.style.width = '25%';
});

xbox.addEventListener('mouseleave', () => {
    xbox.style.width = '50%';
    playstation.style.width = '50%';
});
