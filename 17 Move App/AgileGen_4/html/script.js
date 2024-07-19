
document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        { title: "Movie One", image: "movie1.jpg", rating: "8.5", summary: "This is a summary of movie one." },
        { title: "Movie Two", image: "movie2.jpg", rating: "7.8", summary: "This is a summary of movie two." },
        // Add more movies as needed
    ];

    const movieGrid = document.querySelector('.movie-grid');
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="title">${movie.title}</div>
            <div class="rating">Rating: ${movie.rating}</div>
            <div class="summary">${movie.summary}</div>
        `;
        movieGrid.appendChild(movieCard);
    });
});

function searchMovies() {
    console.log('Search functionality to be implemented.');
}
