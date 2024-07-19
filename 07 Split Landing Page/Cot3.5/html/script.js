
const ps5 = document.querySelector('.console.ps5');
const xbox = document.querySelector('.console.xbox');

ps5.addEventListener('mouseover', () => {
  ps5.style.width = '70%';
  xbox.style.width = '30%';
});

xbox.addEventListener('mouseover', () => {
  xbox.style.width = '70%';
  ps5.style.width = '30%';
});

ps5.addEventListener('mouseout', () => {
  ps5.style.width = '50%';
  xbox.style.width = '50%';
});

xbox.addEventListener('mouseout', () => {
  xbox.style.width = '50%';
  ps5.style.width = '50%';
});
