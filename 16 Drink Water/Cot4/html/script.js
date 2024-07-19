
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', event => {
    let answer = event.target.nextElementSibling;
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
  })
})
