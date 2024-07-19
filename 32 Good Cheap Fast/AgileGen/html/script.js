
document.addEventListener("DOMContentLoaded", function() {
    const goodQualitySlider = document.getElementById("good-quality");
    const cheapCostSlider = document.getElementById("cheap-cost");
    const fastTimeSlider = document.getElementById("fast-time");

    goodQualitySlider.addEventListener("input", function() {
        if (goodQualitySlider.value == 1 && cheapCostSlider.value == 1) {
            fastTimeSlider.disabled = true;
        } else {
            fastTimeSlider.disabled = false;
        }
    });

    cheapCostSlider.addEventListener("input", function() {
        if (goodQualitySlider.value == 1 && cheapCostSlider.value == 1) {
            fastTimeSlider.disabled = true;
        } else {
            fastTimeSlider.disabled = false;
        }
    });

    fastTimeSlider.addEventListener("input", function() {
        if (goodQualitySlider.value == 1 && cheapCostSlider.value == 1 && fastTimeSlider.value == 1) {
            showError("You cannot select all three sliding buttons at the same time.");
        }
    });

    function showError(errorMessage) {
        alert(errorMessage);
        goodQualitySlider.value = 0;
        cheapCostSlider.value = 0;
        fastTimeSlider.value = 0;
    }
});
