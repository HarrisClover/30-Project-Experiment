// Array of image paths
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg'
];

// Function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create the table
function createImageTable(rows, cols) {
    const table = document.getElementById('imageTable');
    const shuffledImages = shuffle(images.slice());

    let index = 0;
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            if (index < shuffledImages.length) {
                const img = document.createElement('img');
                img.src = shuffledImages[index];
                td.appendChild(img);
                index++;
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

// Create a 2x3 table (2 rows, 3 columns)
createImageTable(2, 3);