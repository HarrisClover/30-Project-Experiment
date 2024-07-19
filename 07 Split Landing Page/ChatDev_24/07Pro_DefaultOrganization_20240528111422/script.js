// Get the console elements
const playstation = document.getElementById('playstation');
const xbox = document.getElementById('xbox');
// Define the event handler functions
const handlePlaystationMouseEnter = () => {
    playstation.style.width = '60%';
    xbox.style.width = '40%';
};
const handlePlaystationMouseLeave = () => {
    playstation.style.width = '50%';
    xbox.style.width = '50%';
};
const handleXboxMouseEnter = () => {
    xbox.style.width = '60%';
    playstation.style.width = '40%';
};
const handleXboxMouseLeave = () => {
    xbox.style.width = '50%';
    playstation.style.width = '50%';
};
// Add event listeners for hover effect
playstation.addEventListener('mouseenter', handlePlaystationMouseEnter);
playstation.addEventListener('mouseleave', handlePlaystationMouseLeave);
xbox.addEventListener('mouseenter', handleXboxMouseEnter);
xbox.addEventListener('mouseleave', handleXboxMouseLeave);