document.addEventListener("DOMContentLoaded", () => {
    const refreshBtn = document.getElementById("refresh-btn");
    const retryBtn = document.getElementById("retry-btn");
    refreshBtn.addEventListener("click", fetchWeatherData);
    retryBtn.addEventListener("click", fetchWeatherData);

    fetchWeatherData();
});

async function fetchWeatherData() {
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tianjin?unitGroup=metric&key=PV7ECPU2ZHV4CGDTQUY7NW9SS&contentType=json";
    try {
        const response = await fetch(url);
        const data = await response.json();

        displayWeatherData(data);
    } catch (error) {
        showErrorPage();
    }
}

function displayWeatherData(data) {
    const homePage = document.getElementById("home");
    const errorPage = document.getElementById("error");
    const currentWeather = document.getElementById("current-weather");
    const forecast = document.getElementById("forecast");
    const lastUpdated = document.getElementById("last-updated");homePage.hidden = false;
    errorPage.hidden = true;

    currentWeather.innerHTML = `
    <div class="weather-card">
        <h3>${data.currentConditions.temp}°C</h3>
        <p>${data.currentConditions.icon}</p>
        <p>${data.currentConditions.description}</p>
    </div>
`;

    forecast.innerHTML = data.days.slice(1).map(day => `
    <div class="weather-card">
        <h3>${day.tempmax}°C</h3>
        <p>${day.datetime}</p>
        <p>${day.icon}</p>
        <p>${day.description}</p>
    </div>
`).join("");

    lastUpdated.querySelector("span").textContent = new Date(data.currentConditions.datetime).toLocaleString();
}

function showErrorPage() {
    const homePage = document.getElementById("home");
    const errorPage = document.getElementById("error");
    homePage.hidden = true;
    errorPage.hidden = false;
}