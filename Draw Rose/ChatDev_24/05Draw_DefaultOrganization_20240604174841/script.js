function drawFlower(canvas) {
    var context = canvas.getContext('2d');
    var x = getRandomInt(100, 700);
    var y = getRandomInt(100, 500);
    var radius = getRandomInt(50, 100);
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = 'yellow';
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();
    context.beginPath();
    context.moveTo(x, y - radius);
    context.lineTo(x - radius / 2, y + radius / 2);
    context.lineTo(x + radius / 2, y + radius / 2);
    context.closePath();
    context.fillStyle = 'green';
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.addEventListener('load', function() {
    var canvas = document.getElementById('flowerCanvas');
    var drawButton = document.getElementById('drawButton');
    drawButton.addEventListener('click', function() {
        drawFlower(canvas);
    });
});