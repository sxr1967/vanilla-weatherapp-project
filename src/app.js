function weatherDisplay(response) {
  console.log(response);
  console.log(response.data.main.temp);
  console.log(response.data.name);
  console.log(response.data.weather[0].description);
  console.log(response.data.wind.speed);
  console.log(response.data.main.humidity);

  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let weatherDescriptionElement = document.querySelector("#weatherDescription");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("display-time");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  weatherDescriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiurl =
  "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5fc91e4f79dee96c1ed3234e310a83cf&units=metric";

console.log(apiurl);
axios.get(apiurl).then(weatherDisplay);
