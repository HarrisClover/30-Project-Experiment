
var testimonials = [
    {text: "Testimonial 1", author: "Author 1"},
    {text: "Testimonial 2", author: "Author 2"},
    {text: "Testimonial 3", author: "Author 3"}
];

var currentTestimonial = 0;

window.onload = function() {
    displayTestimonial();
    document.getElementById("next").onclick = nextTestimonial;
};

function displayTestimonial() {
    document.getElementById("testimonial-text").innerText = testimonials[currentTestimonial].text;
    document.getElementById("testimonial-author").innerText = testimonials[currentTestimonial].author;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    displayTestimonial();
}
