// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Set initial brush size and color
let brushSize = 5;
let brushColor = '#000000';
// Function to handle drawing on the canvas
function draw(e) {
    if (e.buttons !== 1 && e.type !== 'touchmove') return; // Only draw when left mouse button is pressed or touch event occurs
    if (e.type === 'touchmove') {
        e.preventDefault(); // Prevent scrolling on touch devices
        const touch = e.touches[0];
        ctx.beginPath();
        ctx.arc(touch.pageX, touch.pageY, brushSize, 0, 2 * Math.PI);
        ctx.fillStyle = brushColor;
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, brushSize, 0, 2 * Math.PI);
        ctx.fillStyle = brushColor;
        ctx.fill();
    }
}
// Function to update the brush size
function updateBrushSize(e) {
    brushSize = e.target.value;
}
// Function to update the brush color
function updateBrushColor(e) {
    brushColor = e.target.value;
}
// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// Add event listeners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', draw);
canvas.addEventListener('touchmove', draw); // Add touchmove event listener
document.addEventListener('mouseup', () => {
    // ctx.closePath(); // Remove this line to fix the issue
});
document.getElementById('brush-size').addEventListener('input', updateBrushSize);
document.getElementById('color-picker').addEventListener('input', updateBrushColor);
document.getElementById('clear-button').addEventListener('click', clearCanvas);