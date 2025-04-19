import React, { useState } from "react";
import "./App.css"; // Importing CSS for styles and cloud animation

const mockWeatherData = {
  "New York": { temperature: "18°C", wind: "10 km/h", condition: "Sunny" },
  "London": { temperature: "12°C", wind: "15 km/h", condition: "Cloudy" },
  "Tokyo": { temperature: "20°C", wind: "5 km/h", condition: "Rainy" },
  "Paris": { temperature: "16°C", wind: "12 km/h", condition: "Clear" },
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const data = mockWeatherData[city.trim()];
    if (data) {
      setWeather(data);
      setError("");
    } else {
      setWeather(null);
      setError("City not found. Please enter a valid city.");
    }
  };

  return (
    <div className="app-container">
      <div className="clouds"></div> {/* Cloud animation background */}
      <div className="weather-app">
        <h1 className="title">🌤 Weather App</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Get Weather</button>
        </div>

        {weather && (
          <div className="weather-card">
            <h2>Weather in {city}</h2>
            <p>🌡 Temperature: {weather.temperature}</p>
            <p>💨 Wind: {weather.wind}</p>
            <p>🌥 Condition: {weather.condition}</p>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;
