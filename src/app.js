/* ************* Date & Time Format ************ */
function formatDate() {
  let today = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[today.getDay()];
  let date = today.getDate();
  let year = today.getFullYear();
  let month = months[today.getMonth()];
  return `${day} ${month} ${date}, ${year} <hr>`;
}

function formatTime() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours > 13) {
    return `${hours}:${minutes} PM`;
  } else return `${hours}:${minutes} AM`;
}
/* **************  Default Display Setting - ***************
 *****************  no user input required    *************** */

function weatherDisplay(response) {
  // ************  CONSOLE LOGS  **************  //
  console.log(response);
  console.log(response.data.main.temp);
  console.log(response.data.name);
  console.log(response.data.weather[0].description);
  console.log(response.data.wind.speed);
  console.log(response.data.main.humidity);
  // *********************************************  //

  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let weatherDescriptionElement = document.querySelector("#weatherDescription");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#displayicon");
  let iconcode = response.data.weather[0].icon;

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  weatherDescriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);

  timeElement.innerHTML = formatTime();
  dateElement.innerHTML = formatDate();

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${iconcode}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  iconElement.setAttribute("width", 82);
}

/* ************* Button + Forms *******************/
/* *****************  API  *****************  */
let apiurl =
  "https://api.openweathermap.org/data/2.5/weather?q=rochester&appid=5fc91e4f79dee96c1ed3234e310a83cf&units=metric";

console.log(apiurl);
axios.get(apiurl).then(weatherDisplay);
