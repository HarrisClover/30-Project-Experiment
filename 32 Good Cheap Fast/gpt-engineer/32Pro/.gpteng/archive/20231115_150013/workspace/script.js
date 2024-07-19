let sliders = document.getElementsByClassName('slider');

for(let i = 0; i < sliders.length; i++) {
    sliders[i].oninput = function() {
        let total = 0;
        for(let j = 0; j < sliders.length; j++) {
            total += parseInt(sliders[j].value);
        }
        if(total > 200) {
            this.value -= total - 200;
        }
    }
}
