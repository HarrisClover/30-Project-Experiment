window.onload = function() {
    var slider = document.getElementById("myRange");
    slider.oninput = function() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('slider=' + this.value);
    }
}
