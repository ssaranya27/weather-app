# weather-app
## NAME: SARANYA S.
## REG NO: 212223220101
## DATE: 19-04-2025

## Aim:
To create a simple weather application using React that allows the user to enter a city name and view simulated weather data such as temperature, wind speed, and sky condition.

## Algorithm:
Step:1
React functional component (WeatherApp)

Step:2
Text input to enter city name

Step:3
A button or "Enter" key to trigger search

Step:4
Display of weather data (if city is valid)

Step:5
Error message for invalid cities

Step:6
Basic styling using external or inline CSS

## PROGRAM:

## APP.JS:

```
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
```

## APP.CSS

```


  
.app-container {
    position: relative;
    height: 100vh;
    background: linear-gradient(to bottom, #dbeafe, #f0f9ff);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('C:\Users\ssara\weatherapp\public\image.png') no-repeat center center fixed;
    background-size: cover;
  }
  
  
  .weather-app {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    padding: 30px;
    max-width: 400px;
    width: 90%;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    color: #333;
    z-index: 1;
  }
  
  .title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .search-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .search-box input {
    padding: 10px;
    width: 65%;
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    background-color: #f0f0f0;
  }
  
  .search-box button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .search-box button:hover {
    background-color: #0056b3;
  }
  
  .weather-card {
    background-color: rgba(255, 255, 255, 0.85);
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
  
  .weather-card h2 {
    margin-bottom: 10px;
  }
  
  .weather-card p {
    margin: 5px 0;
    font-size: 16px;
  }
  
  .error {
    color: red;
    font-weight: bold;
    margin-top: 15px;
  }
 
  
  ```
## OUTPUT:

![alt text](<Screenshot (121).png>)

 ![alt text](<Screenshot (120).png>)

 ## RESULT:

 The program for create a simple weather application using React that allows the user to enter a city name and view simulated weather data such as temperature, wind speed, and sky condition is executed successfully.
