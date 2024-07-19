
var sliders = document.getElementsByClassName('slider');

for (var i = 0; i < sliders.length; i++) {
    sliders[i].onchange = function() {
        var activeSliders = 0;
        for (var j = 0; j < sliders.length; j++) {
            if (sliders[j].value > 1) {
                activeSliders++;
            }
        }
        if (activeSliders > 2) {
            this.value = 1;
        }
    }
}
