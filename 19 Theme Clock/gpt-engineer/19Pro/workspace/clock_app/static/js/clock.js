window.onload = function() {
    var clock = document.getElementById('clock');
    var time = document.getElementById('time');
    var modeSwitch = document.getElementById('mode-switch');

    modeSwitch.onclick = function() {
        document.body.classList.toggle('dark-mode');
    };

    setInterval(function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var secondsAngle = seconds * 6;
        clock.style.transform = 'rotate(' + secondsAngle + 'deg)';

        time.textContent = hours + ':' + minutes + ':' + seconds;
    }, 1000);
};
