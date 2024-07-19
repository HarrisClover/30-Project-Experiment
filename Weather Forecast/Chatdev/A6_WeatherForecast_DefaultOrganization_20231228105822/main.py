'''
This is the main file of the weather display interface.
It imports the necessary modules and starts the GUI.
'''
import tkinter as tk
from weather import WeatherAPI
class WeatherDisplayGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Weather Display")
        self.city_label = tk.Label(self.root, text="City:")
        self.city_label.pack()
        self.city_entry = tk.Entry(self.root)
        self.city_entry.pack()
        self.get_weather_button = tk.Button(self.root, text="Get Weather", command=self.get_weather)
        self.get_weather_button.pack()
        self.weather_label = tk.Label(self.root, text="")
        self.weather_label.pack()
    def get_weather(self):
        city = self.city_entry.get()
        weather_api = WeatherAPI()
        weather = weather_api.get_weather(city)
        self.weather_label.config(text=weather)
if __name__ == "__main__":
    root = tk.Tk()
    weather_display_gui = WeatherDisplayGUI(root)
    root.mainloop()