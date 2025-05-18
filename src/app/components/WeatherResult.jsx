'use client'

export default function WeatherResult({ data }) {
  const { name, main, weather, wind } = data
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  return (
    <div className="weather-result">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p><strong>{weather[0].main}</strong> - {weather[0].description}</p>
      <p>🌡 Temperature: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬 Wind Speed: {wind.speed} m/s</p>
    </div>
  )
}
