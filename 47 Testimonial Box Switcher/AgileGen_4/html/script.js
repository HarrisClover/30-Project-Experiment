
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        { quote: "This service is outstanding!", name: "John Doe" },
        { quote: "I'm truly impressed with your team's efforts.", name: "Jane Smith" },
        { quote: "A reliable and trustworthy company.", name: "Alice Johnson" }
    ];
    
    let currentIndex = 0;
    
    function displayTestimonial(index) {
        const testimonialElement = document.getElementById('testimonial');
        testimonialElement.innerHTML = `
            <p>"${testimonials[index].quote}"</p>
            <p><strong>- ${testimonials[index].name}</strong></p>
        `;
    }
    
    function cycleTestimonials() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        displayTestimonial(currentIndex);
    }
    
    displayTestimonial(currentIndex); // Display the first testimonial initially
    setInterval(cycleTestimonials, 30000); // Change testimonial every 30 seconds
});
