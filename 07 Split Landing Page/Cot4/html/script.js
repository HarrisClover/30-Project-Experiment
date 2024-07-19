
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseover', () => {
  left.classList.add('expand');
  right.classList.add('shrink');
});

right.addEventListener('mouseover', () => {
  right.classList.add('expand');
  left.classList.add('shrink');
});
