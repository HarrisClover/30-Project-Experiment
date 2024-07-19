let totalWater = 0;
const dailyGoal = 2000;
function logWater(amount, glass) {
  totalWater += amount;
  glass.classList.add("selected");
  updateProgressBar();
}
function updateProgressBar() {
  const progress = (totalWater / dailyGoal) * 100;
  document.getElementById("progress").style.width = progress + "%";
}