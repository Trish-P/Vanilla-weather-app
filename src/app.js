function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let(hours < 10);
  hours = `0${hours}`;
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  response.data.main.temp;
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.main.wind);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "f1a03t171ee4df4ba7f964ba18abo4b3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?tulsa&apiid=${apiKey}&units=metric`;

axios.get(url).then(displayTemperature);
