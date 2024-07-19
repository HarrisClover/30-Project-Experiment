
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const inputValue = document.getElementById("input-value");
const resetButton = document.getElementById("reset-button");

slider.addEventListener("input", () => {
    sliderValue.textContent = slider.value;
});

inputValue.addEventListener("change", () => {
    slider.value = inputValue.value;
    sliderValue.textContent = inputValue.value;
});

resetButton.addEventListener("click", () => {
    slider.value = 50;
    sliderValue.textContent = 50;
    inputValue.value = 50;
});
