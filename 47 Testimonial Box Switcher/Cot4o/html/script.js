const testimonials = [
    {
        text: "This is a great product!",
        author: "John Doe"
    },
    {
        text: "I am very satisfied with the service.",
        author: "Jane Smith"
    },
    {
        text: "Highly recommend to everyone!",
        author: "Alice Johnson"
    },
    {
        text: "Exceptional quality and support.",
        author: "Michael Brown"
    }
];

let currentIndex = 0;

const testimonialText = document.getElementById('testimonial-text');
const testimonialAuthor = document.getElementById('testimonial-author');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.textContent = `- ${testimonials[index].author}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
});

// Initialize with the first testimonial
updateTestimonial(currentIndex);