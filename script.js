var searchButton = document.getElementById("button-addon1");
var APIkey = "93b1a8aba548ebcefe09b6f2e82b258f";
var apiKey = "a9c9a0d72993004daad86c302cb27400";
var bitKey = "2d834009bc27453f896fb7da27cc02b1";
var city = "";

// searchButton.addEventListener("click", getWeather);
function smSearch() {
  var city = document.getElementById("smTopic").value;

  // var CoordinateURL =
  //   "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
  //   city +
  //   "&appid=" +
  //   APIkey;
  var CoordinateURL =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" +
    city +
    "&appid=" +
    APIkey;

  getCoordinates(CoordinateURL);
}

function getCoordinates(CoordinateURL) {
  fetch(CoordinateURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getWeather(data.coord.lat, data.coord.lon);
    });
}

function getWeather(lat, lon) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

//function () -- function that renders the DOM Showing temp, date, image. etc
//for loop create elements and then append that to the DOM
// for (i = 0; i )
