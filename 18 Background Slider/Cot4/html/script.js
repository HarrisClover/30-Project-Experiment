
let index = 0;
const images = document.querySelectorAll('.gallery-img');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', function() {
    index = (index + 1) % totalImages;
    images.forEach((img, i) => {
        img.style.transform = `translateX(${(i - index) * 100}%)`;
    });
});

document.getElementById('prev').addEventListener('click', function() {
    index = (index - 1 + totalImages) % totalImages;
    images.forEach((img, i) => {
        img.style.transform = `translateX(${(i - index) * 100}%)`;
    });
});
