
let waterConsumed = 0;
let dailyGoal = 0;

function logWater(amount) {
    waterConsumed += amount;
    updateTracker();
}

function logCustomWater() {
    let customAmount = prompt("Enter custom amount in ounces:");
    if (customAmount !== null && customAmount !== "") {
        waterConsumed += parseInt(customAmount);
        updateTracker();
    }
}

function updateTracker() {
    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");
    let percentage = (waterConsumed / dailyGoal) * 100;
    progressBar.style.width = percentage + "%";
    progressText.innerHTML = waterConsumed + " oz / " + dailyGoal + " oz";
}

function setGoal() {
    let goalInput = document.getElementById("goal-input");
    dailyGoal = parseInt(goalInput.value);
    updateTracker();
}

window.onload = function() {
    let savedWaterConsumed = localStorage.getItem("waterConsumed");
    let savedDailyGoal = localStorage.getItem("dailyGoal");
    if (savedWaterConsumed !== null) {
        waterConsumed = parseInt(savedWaterConsumed);
    }
    if (savedDailyGoal !== null) {
        dailyGoal = parseInt(savedDailyGoal);
    }
    updateTracker();
};

window.onbeforeunload = function() {
    localStorage.setItem("waterConsumed", waterConsumed);
    localStorage.setItem("dailyGoal", dailyGoal);
};
