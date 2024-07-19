
const triangle = document.querySelector('.triangle');

setInterval(() => {
  triangle.style.borderBottomColor = triangle.style.borderBottomColor === 'black' ? 'white' : 'black';
}, 500);
