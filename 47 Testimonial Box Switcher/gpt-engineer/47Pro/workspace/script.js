const testimonials = [
    {
        text: 'This is the best product I have ever purchased!',
        author: 'John Doe'
    },
    {
        text: 'I am so happy with my purchase. Highly recommended!',
        author: 'Jane Doe'
    },
    // Add more testimonials as needed
];

let currentTestimonial = 0;

document.getElementById('testimonial-text').innerText = testimonials[currentTestimonial].text;
document.getElementById('testimonial-author').innerText = testimonials[currentTestimonial].author;

document.getElementById('prev').addEventListener('click', () => {
    currentTestimonial--;
    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    }
    document.getElementById('testimonial-text').innerText = testimonials[currentTestimonial].text;
    document.getElementById('testimonial-author').innerText = testimonials[currentTestimonial].author;
});

document.getElementById('next').addEventListener('click', () => {
    currentTestimonial++;
    if (currentTestimonial > testimonials.length - 1) {
        currentTestimonial = 0;
    }
    document.getElementById('testimonial-text').innerText = testimonials[currentTestimonial].text;
    document.getElementById('testimonial-author').innerText = testimonials[currentTestimonial].author;
});
