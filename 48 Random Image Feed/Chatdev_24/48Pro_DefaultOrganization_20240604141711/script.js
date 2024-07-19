// script.js
// Array of picture URLs
var pictures = [
    "https://example.com/picture1.jpg",
    "https://example.com/picture2.jpg",
    "https://example.com/picture3.jpg",
    // Add more picture URLs as needed
];
// Function to randomly select a picture URL
function getRandomPicture() {
    var randomIndex = Math.floor(Math.random() * pictures.length);
    return pictures[randomIndex];
}
// Function to populate the picture table with random pictures
function populatePictureTable() {
    var table = document.getElementById("pictureTable");
    if (table) {
        var row = table.rows[1];
        if (!row) {
            row = table.insertRow(1);
        }
        var cell = row.insertCell(0);
        var pictureUrl = getRandomPicture();
        var img = document.createElement("img");
        img.src = pictureUrl;
        cell.innerHTML = '';
        cell.appendChild(img);
    } else {
        console.error("Table not found.");
    }
}
// Call the populatePictureTable function to initially populate the table
populatePictureTable();