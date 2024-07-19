
document.getElementById('slider').addEventListener('input', function() {
    document.getElementById('sliderValue').value = this.value;
});

document.getElementById('sliderValue').addEventListener('change', function() {
    const slider = document.getElementById('slider');
    if (this.value > slider.max) {
        this.value = slider.max;
    } else if (this.value < slider.min) {
        this.value = slider.min;
    }
    slider.value = this.value;
});

document.getElementById('resetButton').addEventListener('click', function() {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('sliderValue');
    slider.value = 50;
    sliderValue.value = 50;
});
