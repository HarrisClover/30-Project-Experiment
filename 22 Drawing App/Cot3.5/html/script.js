
// Get the canvas element and its 2D context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial brush size and color
let brushSize = 5;
let brushColor = '#000000';

// Set up event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
document.getElementById('brush-size').addEventListener('input', updateBrushSize);
document.getElementById('color-picker').addEventListener('input', updateBrushColor);
document.getElementById('clear-button').addEventListener('click', clearCanvas);

// Variables to track drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Function to start drawing
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to draw on the canvas
function draw(e) {
  if (!isDrawing) return;
  
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineWidth = brushSize;
  ctx.strokeStyle = brushColor;
  ctx.lineCap = 'round';
  ctx.stroke();
  
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
}

// Function to update brush size
function updateBrushSize() {
  brushSize = this.value;
}

// Function to update brush color
function updateBrushColor() {
  brushColor = this.value;
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
