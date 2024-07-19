const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

const colorPicker = document.getElementById
('color-picker');
const brushSize = document.getElementById('brush-size');
const clearCanvasBtn = document.getElementById('clear-canvas');

let painting = false;

function startDrawing(e) {
    painting = true;
    draw(e);
}

function stopDrawing() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = brushSize.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value;ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

clearCanvasBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});