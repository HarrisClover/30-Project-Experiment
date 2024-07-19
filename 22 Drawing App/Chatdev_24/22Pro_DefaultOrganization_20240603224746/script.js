document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const brushSizeInput = document.getElementById('brush-size');
    const colorPicker = document.getElementById('color-picker');
    const clearButton = document.getElementById('clear-button');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    brushSizeInput.addEventListener('input', updateBrushSize);
    colorPicker.addEventListener('input', updateColor);
    clearButton.addEventListener('click', clearCanvas);
    function startDrawing(e) {
        [lastX, lastY] = [e.offsetX, e.offsetY];
        context.beginPath();
        isDrawing = true;
    }
    function draw(e) {
        if (!isDrawing) return;
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath(); // Add this line
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    function stopDrawing() {
        isDrawing = false;
    }
    function updateBrushSize() {
        context.lineWidth = brushSizeInput.value;
    }
    function updateColor() {
        context.strokeStyle = colorPicker.value;
    }
    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
});