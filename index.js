let currentDate = new Date();
let p = document.querySelector(".day_of_week");
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let currentDay = days[currentDate.getDay()];
let currentHour = currentDate.getHours();
if (currentHour < 10) {
    currentHour = `0${currentHour}`;
}
let currentMin = currentDate.getMinutes();
if (currentMin < 10) {
    currentMin = `0${currentMin}`;
}
let date = `${currentDay} ${currentHour}:${currentMin}`;
p.innerHTML = `${date}`;

function showTemperature(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
}

function showCity(city) {
    let apiKey = "d6d5227874685b1ce6a21a8ee1d3034d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function showArea(event) {
    event.preventDefault();
    let city = document.querySelector(".form-control").value;
    showCity(city);
}
let form = document.querySelector(".form-inline");
form.addEventListener("submit", showArea);
showCity("Tokyo");