function updateSliders() {
    const quality = document.getElementById('quality');
    const cost = document.getElementById('cost');
    const time = document.getElementById('time');
    const message = document.getElementById('message');

    const selected = [quality.checked, cost.checked, time.checked].filter(Boolean).length;

    if (selected > 2) {
        message.textContent = "You can only select two goals at the same time.";
        if (quality.checked && cost.checked && time.checked) {
            time.checked = false;
        }
    } else {
        message.textContent = "";
    }
}