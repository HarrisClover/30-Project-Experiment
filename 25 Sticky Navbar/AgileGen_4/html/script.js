document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('resize', function() {
        if (window.innerWidth < 600) {
            navbar.style.backgroundColor = '#FF6347'; // Tomato color for smaller screens
        } else {
            navbar.style.backgroundColor = '#4682B4'; // SteelBlue color for larger screens
        }
    });
});
