
const images = [
    { src: "image1.jpg", caption: "Caption for Image 1" },
    { src: "image2.jpg", caption: "Caption for Image 2" },
    { src: "image3.jpg", caption: "Caption for Image 3" }
];

let currentIndex = 0;

document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

function updateGallery() {
    const imageElement = document.getElementById('current-image');
    const captionElement = document.getElementById('image-caption');
    imageElement.src = images[currentIndex].src;
    imageElement.alt = `Underwater Image ${currentIndex + 1}`;
    captionElement.textContent = images[currentIndex].caption;

    document.getElementById('left-arrow').classList.toggle('hidden', currentIndex === 0);
    document.getElementById('right-arrow').classList.toggle('hidden', currentIndex === images.length - 1);
}

window.onload = () => {
    updateGallery();
};
