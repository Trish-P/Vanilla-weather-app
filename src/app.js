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
  wind.innerHTML = Math.round(response.data.main.wind);
}

let apiKey = "f1a03t171ee4df4ba7f964ba18abo4b3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?tulsa&apiid=${apiKey}&units=metric`;

axios.get(url).then(displayTemperature);
