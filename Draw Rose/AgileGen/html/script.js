
// Get canvas element
const canvas = document.getElementById('flowerCanvas');
const context = canvas.getContext('2d');

// Set initial drawing properties
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let color = '#000000';
let size = 5;
let shape = 'circle';

// Add event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Function to start drawing
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to draw
function draw(e) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.lineWidth = size;
    if (shape === 'circle') {
        context.lineCap = 'round';
    } else if (shape === 'square') {
        context.lineCap = 'square';
    } else if (shape === 'triangle') {
        context.lineCap = 'butt';
    }
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Function to stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Event listener for color picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {
    color = e.target.value;
});

// Event listener for size slider
const sizeSlider = document.getElementById('sizeSlider');
sizeSlider.addEventListener('input', (e) => {
    size = e.target.value;
});

// Event listener for shape select
const shapeSelect = document.getElementById('shapeSelect');
shapeSelect.addEventListener('change', (e) => {
    shape = e.target.value;
});

// Event listener for save button
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'flower_drawing.png';
    link.click();
});

// Event listener for undo button
const undoButton = document.getElementById('undoButton');
undoButton.addEventListener('click', () => {
    // Code to undo the last change
});

// Event listener for redo button
const redoButton = document.getElementById('redoButton');
redoButton.addEventListener('click', () => {
    // Code to redo a change
});

// Event listener for background select
const backgroundSelect = document.getElementById('backgroundSelect');
backgroundSelect.addEventListener('change', (e) => {
    const selectedBackground = e.target.value;
    canvas.style.background = selectedBackground;
});

// Event listener for background opacity slider
const backgroundOpacitySlider = document.getElementById('backgroundOpacitySlider');
backgroundOpacitySlider.addEventListener('input', (e) => {
    const opacity = e.target.value;
    canvas.style.opacity = opacity;
});

// Event listener for add leaves button
const addLeavesButton = document.getElementById('addLeavesButton');
addLeavesButton.addEventListener('click', () => {
    // Code to add leaves to the drawing
});

// Event listener for add stems button
const addStemsButton = document.getElementById('addStemsButton');
addStemsButton.addEventListener('click', () => {
    // Code to add stems to the drawing
});

// Event listener for add flowers button
const addFlowersButton = document.getElementById('addFlowersButton');
addFlowersButton.addEventListener('click', () => {
    // Code to add flowers to the drawing
});

// Event listener for invite button
const inviteButton = document.getElementById('inviteButton');
inviteButton.addEventListener('click', () => {
    // Code to invite others for collaborative drawing
});
