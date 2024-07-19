
const movieGrid = document.getElementById('movie-grid');
const searchBar = document.getElementById('search-bar');

// Sample movie data
const movies = [
  {
    title: 'Movie 1',
    image: 'https://example.com/movie1.jpg',
    rating: 4.5,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Movie 2',
    image: 'https://example.com/movie2.jpg',
    rating: 3.8,
    summary: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  // Add more movie objects here...
];

// Function to display movies
function displayMovies(movies) {
  movieGrid.innerHTML = '';
  
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    
    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    
    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.title;
    
    const movieRating = document.createElement('p');
    movieRating.textContent = `Rating: ${movie.rating}`;
    
    const movieSummary = document.createElement('p');
    movieSummary.textContent = movie.summary;
    
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieRating);
    movieCard.appendChild(movieSummary);
    
    movieGrid.appendChild(movieCard);
  });
}

// Event listener for search bar
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
  displayMovies(filteredMovies);
});

// Initial display of all movies
displayMovies(movies);
