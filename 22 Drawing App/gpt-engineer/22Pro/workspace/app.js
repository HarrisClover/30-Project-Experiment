window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var painting = false;

    function startDraw(e) {
        painting = true;
        draw(e);
    }

    function endDraw() {
        painting = false;
        context.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        context.lineWidth = document.getElementById('brushSize').value;
        context.lineCap = 'round';
        context.strokeStyle = document.getElementById('colorPicker').value;

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', draw);
    document.getElementById('clearCanvas').addEventListener('click', clearCanvas);
}
