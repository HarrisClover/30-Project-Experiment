document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        var output = document.getElementById('output');
        output.innerHTML = `
            <p>event.key: ${event.key}</p>
            <p>event.keyCode: ${event.keyCode}</p>
            <p>event.code: ${event.code}</p>
        `;
    });
});