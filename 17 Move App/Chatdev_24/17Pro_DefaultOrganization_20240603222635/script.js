document.addEventListener("DOMContentLoaded", function() {
    fetchMovies();
});
function fetchMovies() {
    // Fetch movie data from an API or a local data source
    // For demonstration purposes, let's assume we have the following data
    const movies = [
        {
            title: "Movie 1",
            cover_image: "movie1.jpg",
            rating: 4.5,
            summary: "Summary of Movie 1"
        },
        {
            title: "Movie 2",
            cover_image: "movie2.jpg",
            rating: 3.8,
            summary: "Summary of Movie 2"
        },
        // Add more movies here
    ];
    displayMovies(movies);
}
function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies");
    movies.forEach(function(movie) {
        const movieElement = createMovieElement(movie);
        moviesContainer.appendChild(movieElement);
    });
}
function createMovieElement(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    const imageElement = document.createElement("img");
    imageElement.src = movie.cover_image;
    movieElement.appendChild(imageElement);
    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.title;
    movieElement.appendChild(titleElement);
    const ratingElement = document.createElement("p");
    ratingElement.textContent = "Rating: " + movie.rating;
    movieElement.appendChild(ratingElement);
    const summaryElement = document.createElement("p");
    summaryElement.textContent = movie.summary;
    movieElement.appendChild(summaryElement);
    return movieElement;
}