// Number of glasses to drink per day
const dailyGoal = 8;

// Create glasses
for (let i = 0; i < dailyGoal; i++) {
    let glass = document.createElement('div');
    glass.className = 'glass';
    document.getElementById('glasses-container').appendChild(glass);
}

// Add click event to glasses
let glasses = document.getElementsByClassName('glass');
for (let i = 0; i < glasses.length; i++) {
    glasses[i].addEventListener('click', function() {
        this.style.backgroundColor = '#00f';
        updateTracker();
    });
}

// Update tracker
function updateTracker() {
    let drunkGlasses = document.querySelectorAll('.glass[style*="background-color"]');
    let progress = (drunkGlasses.length / dailyGoal) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('progress').textContent = Math.round(progress) + '%';
}
