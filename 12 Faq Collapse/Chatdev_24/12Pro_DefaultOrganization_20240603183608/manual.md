# ChatDev FAQ Section

To display the FAQ section on a web page with a drop-down arrow for each question to show or hide the answer, you can use the following HTML, CSS, and JavaScript code:

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>FAQ Section</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <h1>FAQ Section</h1>
  <div class="faq-card">
    <div class="question">
      <h2>Question 1</h2>
      <span class="arrow">▼</span>
    </div>
    <div class="answer">
      <p>Answer 1</p>
    </div>
  </div>
  <div class="faq-card">
    <div class="question">
      <h2>Question 2</h2>
      <span class="arrow">▼</span>
    </div>
    <div class="answer">
      <p>Answer 2</p>
    </div>
  </div>
  <!-- Add more FAQ cards as needed -->
  <script src="script.js"></script>
</body>
</html>
```

**styles.css**
```css
.faq-card {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}
.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.answer {
  display: none;
  margin-top: 10px;
}
.answer.open {
  display: block;
}
.arrow {
  font-size: 20px;
}
.open .arrow {
  transform: rotate(180deg);
}
```

**script.js**
```js
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
```

You can save the HTML code in an `index.html` file, the CSS code in a `styles.css` file, and the JavaScript code in a `script.js` file. Make sure to place these files in the same directory.

The HTML code defines the structure of the FAQ section using `<div>` elements for each question and answer. The CSS code styles the FAQ cards, question, and answer elements, and the JavaScript code adds click event listeners to the questions to toggle the visibility of the answers and change the arrow icon.

To use this FAQ section on your website, simply include the `index.html` file in your project and make sure to link the `styles.css` and `script.js` files correctly.

I hope this helps! Let me know if you have any further questions.