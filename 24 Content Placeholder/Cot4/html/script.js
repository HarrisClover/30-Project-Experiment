
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.placeholder').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000); // simulate a 3 seconds loading time
};
