
var currentImageIndex = 0;
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

function showCurrentImage() {
    var currentImage = document.getElementById("current-image");
    currentImage.src = images[currentImageIndex];
}

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showCurrentImage();
}

function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    showCurrentImage();
}

showCurrentImage();
