
const testimonialBox = document.querySelector('.testimonial-box');
const nextBtn = document.getElementById('next-btn');
const pauseBtn = document.getElementById('pause-btn');
const testimonialDropdown = document.getElementById('testimonial-dropdown');
const testimonials = ['First testimonial', 'Second testimonial', 'Third testimonial'];
let currentTestimonialIndex = 0;
let intervalId;

function displayTestimonial() {
    testimonialBox.innerHTML = `<p class="testimonial">${testimonials[currentTestimonialIndex]}</p>`;
}

function switchToNextTestimonial() {
    currentTestimonialIndex++;
    if (currentTestimonialIndex === testimonials.length) {
        currentTestimonialIndex = 0;
    }
    displayTestimonial();
}

function startTestimonialSwitcher() {
    intervalId = setInterval(switchToNextTestimonial, 3000);
}

function stopTestimonialSwitcher() {
    clearInterval(intervalId);
}

function handleNextButtonClick() {
    switchToNextTestimonial();
    stopTestimonialSwitcher();
}

function handlePauseButtonClick() {
    if (pauseBtn.textContent === 'Pause') {
        stopTestimonialSwitcher();
        pauseBtn.textContent = 'Resume';
    } else {
        startTestimonialSwitcher();
        pauseBtn.textContent = 'Pause';
    }
}

function handleTestimonialDropdownChange() {
    currentTestimonialIndex = testimonialDropdown.selectedIndex;
    displayTestimonial();
    stopTestimonialSwitcher();
}

nextBtn.addEventListener('click', handleNextButtonClick);
pauseBtn.addEventListener('click', handlePauseButtonClick);
testimonialDropdown.addEventListener('change', handleTestimonialDropdownChange);

displayTestimonial();
startTestimonialSwitcher();
