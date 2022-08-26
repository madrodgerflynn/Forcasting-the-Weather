var searchButton = document.getElementById("button-addon1");
var APIkey = "93b1a8aba548ebcefe09b6f2e82b258f";
var apiKey = "a9c9a0d72993004daad86c302cb27400";
var bitKey = "2d834009bc27453f896fb7da27cc02b1";
var city = "";

// searchButton.addEventListener("click", getWeather);
function smSearch() {
  var city = document.getElementById("smTopic").value;

  var searchCity =
    "https://api.weatherbit.io/v2.0/current?city=" +
    city +
    "&units=I&key=" +
    bitKey;
  var cityForecast =
    "https://api.weatherbit.io/v2.0/forecast/daily?days=5&city=" +
    city +
    "&units=I&key=" +
    bitKey;

  getCity(searchCity);
  getForecast(cityForecast);
}

function getCity(searchCity) {
  fetch(searchCity)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function getForecast(cityForecast) {
  fetch(cityForecast)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (i = 0; i < 5; i++) {
        var tempData = data.data[i].temp;
        var windSpeed = data.data[i].wind_spd;
        var uv = data.data[i].uv;
        var precip = data.data[i].precip;
        var humidity = data.data[i].rh;
        var dateTime = data.data[i].datetime;
        var cardIcon =
          "https://www.weatherbit.io/static/img/icons/" +
          data.data[i].weather.icon +
          ".png";
        console.log(cardIcon);
        console.log(dateTime);

        console.log(tempData);

        document.getElementById("temp" + (i + 1)).innerHTML = tempData;
        document.getElementById("wind" + (i + 1)).innerHTML = windSpeed;
        document.getElementById("uv" + (i + 1)).innerHTML = uv;
        document.getElementById("precip" + (i + 1)).innerHTML = precip;
        document.getElementById("rh" + (i + 1)).innerHTML = humidity;
        // document.getElementById("date" + (i + 1)).innerHTML = dateTime;
        document.getElementById("image" + (i + 1)).src = cardIcon;
      }
    });
}
