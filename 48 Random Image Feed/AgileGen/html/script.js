
function randomizePictures() {
    var table = document.getElementById("pictureTable");
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        for (var j = 0; j < cells.length; j++) {
            var randomIndex = Math.floor(Math.random() * cells.length);
            table.rows[i].appendChild(cells[randomIndex]);
        }
    }
}
