$(document).ready(function() {
    $('#search').on('input', function() {
        var query = $(this).val();
        $.post('/search', {query: query}, function(data) {
            $('#user-list').empty();
            for (var i = 0; i < data.length; i++) {
                $('#user-list').append('<li>' + data[i].name + ', ' + data[i].location + '</li>');
            }
        });
    });
});
