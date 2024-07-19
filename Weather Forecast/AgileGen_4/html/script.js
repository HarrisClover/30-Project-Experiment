
document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const date = document.getElementById('datePicker').value;
    const units = document.getElementById('unitsDropdown').value;
    const weatherDisplay = document.getElementById('weatherDisplay');

    // Simulated API response
    const weatherData = {
        city: city,
        date: date ? date : 'Today',
        temperature: units === 'Celsius' ? '20°„C' : '68°„F',
        humidity: '60%',
        windSpeed: '10 km/h'
    };

    let displayContent = `<h2>Weather for ${weatherData.city}</h2>`;
    displayContent += `<p>Date: ${weatherData.date}</p>`;
    displayContent += `<p>Temperature: ${weatherData.temperature}</p>`;
    displayContent += `<p>Humidity: ${weatherData.humidity}</p>`;
    displayContent += `<p>Wind Speed: ${weatherData.windSpeed}</p>`;

    weatherDisplay.innerHTML = displayContent;
});
