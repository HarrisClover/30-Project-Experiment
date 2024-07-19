
window.onload = function() {
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; // Add your image sources here
    var table = document.getElementById('imageTable');
    var rows = 2; // Number of rows
    var cols = 2; // Number of columns

    for (var i = 0; i < rows; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < cols; j++) {
            var cell = document.createElement('td');
            var img = document.createElement('img');
            img.src = images[Math.floor(Math.random() * images.length)];
            cell.appendChild(img);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
