const apiKey = 'b82ecbc6cc43b42d229d58f3af38a3ca'; 
const weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather';

function fetchWeatherData(location) {
    const url = `${weatherEndpoint}?q=${location}&appid=${apiKey}&units=metric`;

    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    console.log(data);
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    console.log(`Weather in ${cityName}:`);
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Description: ${description}`);
}

function main() {
    const userLocation = 'Delhi'

    if (userLocation) {
        fetchWeatherData(userLocation)
            .then(weatherData => {
                if (weatherData) {
                    displayWeatherData(weatherData);
                }
            });
    } else {
        console.log('No location provided.');
    }
}

main();
