const qualitySlider = document.getElementById('quality-slider');
const costSlider = document.getElementById('cost-slider');
const timeSlider = document.getElementById('time-slider');
const resultDiv = document.getElementById('result');
qualitySlider.addEventListener('input', updateResult);
costSlider.addEventListener('input', updateResult);
timeSlider.addEventListener('input', updateResult);
function updateResult() {
    const qualityValue = parseFloat(qualitySlider.value);
    const costValue = parseFloat(costSlider.value);
    const timeValue = parseFloat(timeSlider.value);
    if (Math.abs(qualityValue + costValue + timeValue - 2) < 0.001) {
        resultDiv.textContent = 'You can select any combination of two goals.';
        timeSlider.disabled = false; // Enable the time slider
    } else {
        resultDiv.textContent = 'Please select any two goals.';
        timeSlider.disabled = true; // Disable the time slider
    }
}