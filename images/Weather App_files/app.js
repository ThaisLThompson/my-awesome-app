let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a City");
city = city.toLowerCase();

if (weather[city] !== undefined) {
  city = city.toLowerCase();
  city = city.trim();
  let celsiusTemp = weather[city].temp;
  celsiusTemp = Math.round(celsiusTemp);
  let farTemp = (celsiusTemp * 9) / 5 + 32;
  farTemperature = Math.round(farTemp);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${celsiusTemp}°C (${farTemp}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

let fruit = "  FRUIT";
fruit = fruit.toLowerCase();
fruit = fruit.trim();
