function formatDate(date) {
  let currentHours = date.getHours();
  let hours = currentHours % 12 || 12;
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#current-date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//let searchCity = document.querySelector("#city-search");//
//searchCity.addEventListener("submit", cityDisplay);//

//function cityDisplay(event) {//
//event.preventDefault();//
//let cityInput = document.querySelector("#search-city-2");//
//let searchedCity = document.querySelector("#searched-city");//
//searchedCity.innerHTML = `${cityInput.value}`//
//}//
//let celsius = document.querySelector("#celsius");//
//celsius.addEventListener("click", displayTempC);//

//function displayTempC(event) {//
//event.preventDefault();//
//let displayTempCelsius = document.querySelector("#current-temperature");//
//displayTempCelsius.innerHTML = 40;//
//}//
//let fahrenheit = document.querySelector("#fahrenheit");//
//fahrenheit.addEventListener("click", displayTempF);//

//function displayTempF(event) {//
//event.preventDefault();//
//let displayTempFahrenheit = document.querySelector("#current-temperature");//
//displayTempFahrenheit.innerHTML = 14;//
//}//

//Matt Solution//

function displayWeatherCondition(response) {
  document.querySelector("#searched-city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidityId").innerHTML = response.data.main.humidity;
  document.querySelector("#windSpeed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "b058b0bdb3b4b3e3de7668710049cf5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "b058b0bdb3b4b3e3de7668710049cf5a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = 19;
}

let searchForm = document.querySelector("#city-search");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
