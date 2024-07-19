
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function() {
        const activeButtons = document.querySelectorAll('.toggle-button.active').length;
        const isCurrentActive = this.classList.contains('active');

        if (!isCurrentActive && activeButtons >= 2) {
            document.getElementById('feedback').textContent = "Selecting all three options is not allowed";
            return;
        }

        this.classList.toggle('active');
        document.getElementById('feedback').textContent = '';

        const updatedActiveButtons = document.querySelectorAll('.toggle-button.active').length;
        document.querySelectorAll('.toggle-button').forEach(btn => {
            if (!btn.classList.contains('active') && updatedActiveButtons >= 2) {
                btn.classList.add('disabled');
            } else {
                btn.classList.remove('disabled');
            }
        });
    });
});
