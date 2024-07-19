
const movies = [
  {
    title: "Inception",
    coverImage: "path/to/inception.jpg",
    rating: "8.8",
    summary: "A thief who steals corporate secrets through the use of dream-sharing technology..."
  },
  {
    title: "The Matrix",
    coverImage: "path/to/matrix.jpg",
    rating: "8.7",
    summary: "A computer hacker learns from mysterious rebels about the true nature of his reality..."
  },
  // Add more movie objects
];

function displayMovies(movieList) {
  const movieGrid = document.querySelector('.movie-grid');
  movieGrid.innerHTML = ''; // Clear previous content

  movieList.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    movieItem.innerHTML = `
      <img src="${movie.coverImage}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.rating}</p>
      <p>${movie.summary}</p>
    `;

    movieGrid.appendChild(movieItem);
  });
}

// Initial display of movies
displayMovies(movies);

document.querySelector('.search-box input').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
  displayMovies(filteredMovies);
});
