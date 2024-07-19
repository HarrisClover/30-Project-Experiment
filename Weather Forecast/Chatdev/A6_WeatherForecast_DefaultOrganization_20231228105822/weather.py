import requests
import os
class WeatherAPI:
    def __init__(self):
        self.api_key = os.environ.get("WEATHER_API_KEY")
    def get_weather(self, city):
        if not self.api_key:
            raise ValueError("Weather API key is not set")
        url = f"https://api.weatherapi.com/v1/forecast.json?key={self.api_key}&q={city}&days=1"
        response = requests.get(url)
        data = response.json()
        # Extract the relevant weather information from the API response
        current_weather = data["current"]["condition"]["text"]
        future_weather = data["forecast"]["forecastday"][0]["day"]["condition"]["text"]
        # Format the weather information
        weather = f"Current weather: {current_weather}\nFuture weather: {future_weather}"
        return weather