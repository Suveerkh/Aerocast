const apiKey = 'eaabc0df0cb040f09cd155115251601'; // Replace with your WeatherAPI key
const weatherData = document.getElementById('weatherData');
const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeather');

getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherData.innerHTML = 'Please enter a city name.';
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      weatherData.innerHTML = 'City not found.';
    } else {
      weatherData.innerHTML = `
        <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} km/h</p>
      `;
    }
  } catch (error) {
    weatherData.innerHTML = 'Error fetching weather data.';
  }
});
