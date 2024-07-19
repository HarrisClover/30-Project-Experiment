
document.addEventListener("DOMContentLoaded", function() {
    // Simulate data loading
    setTimeout(function() {
        var placeholder = document.getElementById("content-placeholder");
        var actualContent = document.getElementById("actual-content");

        // Hide the placeholder and show the actual content
        placeholder.classList.add("hidden");
        actualContent.classList.remove("hidden");
    }, 3000); // Simulate a 3-second data load time
});
