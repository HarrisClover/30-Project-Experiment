/*
This is the JavaScript code for handling user interactions.
*/
$(document).ready(function() {
    $('#timer-form').submit(function(event) {
        event.preventDefault();
        var duration = $('#duration').val();
        $.post('/start_timer', { duration: duration }, function(response) {
            $('#timer-status').text(response);
        });
    });
    $('#stop-button').click(function() {
        $.post('/stop_timer', function(response) {
            $('#timer-status').text(response);
        });
    });
});