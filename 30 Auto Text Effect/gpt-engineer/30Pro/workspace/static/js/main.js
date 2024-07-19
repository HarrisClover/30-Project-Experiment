$(document).ready(function() {
    var speed = $('#speed').val();
    setInterval(getWord, 5000 / speed);

    $('#speed').on('input', function() {
        speed = $(this).val();
        clearInterval(interval);
        interval = setInterval(getWord, 5000 / speed);
    });
});

function getWord() {
    $.getJSON('/api/word', function(data) {
        $('#word').text(data.word);
    });
}
