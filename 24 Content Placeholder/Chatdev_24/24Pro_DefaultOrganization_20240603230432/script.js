document.addEventListener("DOMContentLoaded", function() {
  // Simulate loading delay
  setTimeout(function() {
    document.getElementById("text").textContent = "Content Loaded";
  }, 3000);
});