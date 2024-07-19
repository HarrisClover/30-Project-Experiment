document.getElementById("search-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchMovies();
    }
});

function searchMovies() {
    var searchQuery = document.getElementById("search-input").value;
    // Perform search functionality here
    console.log("Searching for movies with query: " + searchQuery);
}
