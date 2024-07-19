
document.addEventListener('DOMContentLoaded', () => {
    const glassIcons = document.querySelectorAll('.glass-icon');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const dailyGoal = 8;
    let currentProgress = 0;

    glassIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            if (currentProgress < dailyGoal) {
                currentProgress += parseInt(icon.dataset.amount);
                updateProgress();
            }
        });
    });

    function updateProgress() {
        const progressPercentage = (currentProgress / dailyGoal) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${currentProgress}/${dailyGoal} glasses`;
        updateGlassIcons();
    }

    function updateGlassIcons() {
        glassIcons.forEach((icon, index) => {
            if (index < currentProgress) {
                icon.src = 'glass-full.png';
            } else {
                icon.src = 'glass-empty.png';
            }
        });
    }
});
