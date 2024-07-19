$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            url: '/login',
            type: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                if (response.status === 'success') {
                    alert('Login successful!');
                } else {
                    alert('Login failed!');
                }
            }
        });
    });
});
