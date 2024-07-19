
// Array of picture URLs
var pictures = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  // Add more image URLs as needed
];

// Function to generate a random picture URL
function getRandomPicture() {
  var randomIndex = Math.floor(Math.random() * pictures.length);
  return pictures[randomIndex];
}

// Function to generate the picture table
function generatePictureTable(rows, columns) {
  var table = document.getElementById("pictureTable");
  var tbody = table.getElementsByTagName("tbody")[0];

  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < columns; j++) {
      var cell = document.createElement("td");
      var img = document.createElement("img");
      img.src = getRandomPicture();
      cell.appendChild(img);
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }
}

// Call the generatePictureTable function with desired rows and columns
generatePictureTable(4, 3); // Example: 4 rows and 3 columns
