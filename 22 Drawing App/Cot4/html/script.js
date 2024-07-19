
window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var drawing = false;
    var colorPicker = document.getElementById('colorPicker');
    var brushSize = document.getElementById('brushSize');
    var clearButton = document.getElementById('clearButton');

    canvas.onmousedown = function(e) {
        drawing = true;
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    canvas.onmousemove = function(e) {
        if(drawing) {
            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.strokeStyle = colorPicker.value;
            context.lineWidth = brushSize.value;
            context.stroke();
        }
    };

    canvas.onmouseup = function() {
        drawing = false;
    };

    clearButton.onclick = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
};
