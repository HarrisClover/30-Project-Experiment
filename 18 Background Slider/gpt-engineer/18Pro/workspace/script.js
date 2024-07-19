let images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more images as needed
];

let currentImageIndex = 0;

document.getElementById('galleryImage').src = images[currentImageIndex];

document.getElementById('prevButton').addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById('galleryImage').src = images[currentImageIndex];
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('galleryImage').src = images[currentImageIndex];
});
