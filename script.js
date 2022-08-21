var searchButton = document.getElementById("button-addon1");
var APIkey = "93b1a8aba548ebcefe09b6f2e82b258f";
var city = ""


// searchButton.addEventListener("click", getWeather);
function smSearch() {
    var city = document.getElementById("smTopic").value;
    
    var weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIkey;
    
    function getWeather() {
        fetch(weatherURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
        });
        
        console.log();
    }
    
}