var currentImageIndex = 1;
var totalImages = 3;
/**
 * Changes the displayed image in the gallery based on the given direction.
 * @param {number} direction - The direction to navigate (-1 for previous, 1 for next).
 */
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 1) {
        currentImageIndex = totalImages;
    } else if (currentImageIndex > totalImages) {
        currentImageIndex = 1;
    }
    var image = document.getElementById("image");
    image.src = "image" + currentImageIndex + ".jpg";
}
// Add event listener for keydown event
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        changeImage(-1);
    } else if (event.key === "ArrowRight") {
        changeImage(1);
    }
});