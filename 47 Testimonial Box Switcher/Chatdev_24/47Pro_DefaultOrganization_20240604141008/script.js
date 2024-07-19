var testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe"
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Smith"
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Mike Johnson"
  }
];
var currentTestimonialIndex = 0;
function showNextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  var testimonial = testimonials[currentTestimonialIndex];
  document.getElementById("testimonial-text").textContent = testimonial.text;
  document.getElementById("testimonial-author").textContent = "- " + testimonial.author;
}
function showPreviousTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  var testimonial = testimonials[currentTestimonialIndex];
  document.getElementById("testimonial-text").textContent = testimonial.text;
  document.getElementById("testimonial-author").textContent = "- " + testimonial.author;
}
// Show the initial testimonial
showNextTestimonial();