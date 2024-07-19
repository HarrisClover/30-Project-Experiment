
const qualitySlider = document.getElementById('quality-slider');
const costSlider = document.getElementById('cost-slider');
const timeSlider = document.getElementById('time-slider');
const resultText = document.getElementById('result-text');

function updateResult() {
  const qualityValue = qualitySlider.value;
  const costValue = costSlider.value;
  const timeValue = timeSlider.value;

  let result = '';

  if (qualityValue == 1) {
    result += 'Good Quality ';
  }

  if (costValue == 1) {
    result += 'Cheap Cost ';
  }

  if (timeValue == 1) {
    result += 'Fast Time';
  }

  resultText.textContent = result;
}

qualitySlider.addEventListener('input', updateResult);
costSlider.addEventListener('input', updateResult);
timeSlider.addEventListener('input', updateResult);
