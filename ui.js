// ui.js

// Added this message in b1

class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.rainQToday = document.getElementById('w-rain-q-today');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    this.windDirection = document.getElementById('w-wind-direction');
    
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute('src', weather.icon_url);
    this.rainQToday.textContent = `Rain: ${weather.precip_today_string}`;
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
    this.dewpoint.textContent = `Dew Point: ${weather.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;
    this.windDirection.textContent = `Wind Direction: ${weather.wind_dir}`;
    
    
  }
}

