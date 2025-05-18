"use client";

import { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherResult from "./components/WeatherResult";
import { CloudSun } from "lucide-react";
import "./styles/main.scss";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = "dd74641e82b1582eb61fffd271f40d67";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found!");

      const data = await res.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <main className="main-container">
      <h1 className="app-title">
        <CloudSun className="weather-icon" size={46} /> SkyCast
      </h1>

      <WeatherSearch onSearch={fetchWeather} />

      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherResult data={weatherData} />}
    </main>
  );
}
