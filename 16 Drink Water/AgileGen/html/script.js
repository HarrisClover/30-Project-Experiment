
// Get elements
const glass = document.getElementById('glass');
const remaining = document.getElementById('remaining');
const progress = document.getElementById('progress');

// Initial progress
let currentProgress = 50;

// Update progress
function updateProgress() {
    glass.className = `glass-${currentProgress}`;
    remaining.textContent = `${2 - currentProgress / 100}L Remained`;
    progress.textContent = `${currentProgress}%`;
}

// Log water intake
function logWaterIntake() {
    if (currentProgress < 100) {
        currentProgress += 10;
        updateProgress();
    }
}

// Event listener for glass click
glass.addEventListener('click', logWaterIntake);

// Initial update
updateProgress();
