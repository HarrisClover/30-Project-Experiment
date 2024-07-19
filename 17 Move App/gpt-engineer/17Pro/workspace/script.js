$(document).ready(function() {
    $('#search').on('keyup', function(e) {
        let searchText = e.target.value;
        getMovies(searchText);
    });
});

function getMovies(searchText) {
    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?s=' + searchText + '&apikey=your_api_key',
        success: function(data) {
            let movies = data.Search;
            let output = '';
            $.each(movies, function(index, movie) {
                output += `
                    <div class="col-md-3">
                        <div class="card movie-card">
                            <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                            <div class="card-body">
                                <h5 class="card-title">${movie.Title}</h5>
                                <p class="card-text">${movie.Year}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            $('#movies').html(output);
        }
    });
}
