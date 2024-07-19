
window.addEventListener('DOMContentLoaded', function() {
    var testimonials = document.querySelectorAll('.testimonial');
    var currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(function(testimonial) {
            testimonial.classList.remove('show');
        });

        testimonials[index].classList.add('show');
    }

    function switchTestimonial() {
        currentIndex++;

        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }

        showTestimonial(currentIndex);
    }

    setInterval(switchTestimonial, 5000);
});
