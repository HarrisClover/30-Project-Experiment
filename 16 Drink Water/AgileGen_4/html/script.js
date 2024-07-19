
document.querySelectorAll('.water-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const volume = parseInt(this.getAttribute('data-volume'));
        updateWaterIntake(volume);
    });
});

function updateWaterIntake(volume) {
    const currentIntakeElement = document.getElementById('current-intake');
    let currentIntake = parseInt(currentIntakeElement.textContent);
    const dailyGoal = parseInt(document.getElementById('daily-goal').textContent);
    currentIntake += volume;
    currentIntakeElement.textContent = `${currentIntake} ml`;

    const progress = document.getElementById('progress');
    const percentage = Math.min(currentIntake / dailyGoal, 1);
    progress.style.transform = `scale(${percentage})`;

    if (currentIntake >= dailyGoal) {
        document.getElementById('notification-area').textContent = "Congratulations! You've reached your hydration goal for today!";
    }
}
