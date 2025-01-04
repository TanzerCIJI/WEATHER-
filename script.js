const apiKey = 'c9f17a782390d5a8471977d01106c8ae';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather');
const actualTemp = document.getElementById('actual-temp');
const feelsTemp = document.getElementById('feels-temp');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const windSpeed = document.getElementById('wind-speed');
const windDeg = document.getElementById('wind-deg');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => updateWeather(data))
            .catch(error => console.error('Error:', error));
    }
});

function updateWeather(data) {
    actualTemp.textContent = data.main.temp.toFixed(1);
    feelsTemp.textContent = data.main.feels_like.toFixed(1);
    humidity.textContent = data.main.humidity;
    pressure.textContent = data.main.pressure;
    windSpeed.textContent = data.wind.speed;
    windDeg.textContent = data.wind.deg;

    updateBackground(data.main.temp);
}

function updateBackground(temp) {
    if (temp <= 0) {
        document.body.style.background = 'linear-gradient(to bottom, #00c6fb, #005bea)';
    } else if (temp > 0 && temp <= 20) {
        document.body.style.background = 'linear-gradient(to bottom, #a8e063, #56ab2f)';
    } else {
        document.body.style.background = 'linear-gradient(to bottom, #ff7e5f, #feb47b)';
    }
}