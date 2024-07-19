// Get all the question elements
const questions = document.querySelectorAll('.question');
// Add click event listener to each question
for (let i = 0; i < questions.length; i++) {
  const question = questions[i];
  question.addEventListener('click', function() {
    // Toggle the 'open' class on the parent element
    this.parentElement.classList.toggle('open');
    // Toggle the 'open' class on the answer element
    const answer = this.nextElementSibling;
    answer.classList.toggle('open');
    // Toggle the arrow icon
    const arrow = this.querySelector('.arrow');
    arrow.textContent = answer.classList.contains('open') ? '▲' : '▼';
  });
}