$(document).ready(function() {
    $('#show-notifications').click(function() {
        $.getJSON('/notifications', function(data) {
            $('#notifications').empty();
            $.each(data, function(key, val) {
                $('#notifications').append('<li>' + val.message + '</li>');
            });
        });
    });
});
