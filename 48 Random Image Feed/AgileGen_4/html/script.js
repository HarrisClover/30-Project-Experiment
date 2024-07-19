
document.getElementById('randomizeButton').addEventListener('click', shuffleImages);

window.onload = function() {
    generateImages();
    shuffleImages();
};

function generateImages() {
    const imageTable = document.getElementById('imageTable');
    for (let i = 1; i <= 9; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/200/200?random=${i}`;
        imageTable.appendChild(img);
    }
}

function shuffleImages() {
    const imageTable = document.getElementById('imageTable');
    const images = Array.from(imageTable.querySelectorAll('img'));
    const shuffledImages = images.sort(() => Math.random() - 0.5);

    imageTable.innerHTML = '';
    shuffledImages.forEach(img => imageTable.appendChild(img));
}
