
const qualitySlider = document.getElementById('qualitySlider');
const costSlider = document.getElementById('costSlider');
const timeSlider = document.getElementById('timeSlider');

const qualityValue = document.getElementById('qualityValue');
const costValue = document.getElementById('costValue');
const timeValue = document.getElementById('timeValue');

qualitySlider.addEventListener('input', updateValues);
costSlider.addEventListener('input', updateValues);
timeSlider.addEventListener('input', updateValues);

function updateValues() {
  qualityValue.textContent = qualitySlider.value;
  costValue.textContent = costSlider.value;
  timeValue.textContent = timeSlider.value;

  const sliders = [qualitySlider, costSlider, timeSlider];
  const maxSliders = sliders.filter(slider => slider.value == 100);

  if (maxSliders.length >= 2) {
    sliders.forEach(slider => {
      if (slider.value != 100) {
        slider.disabled = true;
      }
    });
  } else {
    sliders.forEach(slider => {
      slider.disabled = false;
    });
  }
}
