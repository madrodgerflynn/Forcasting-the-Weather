var searchButton = document.getElementById("button-addon1");
var APIkey = "93b1a8aba548ebcefe09b6f2e82b258f";
var city;

function getApi() {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    
function searchCity() {
    var searchCity = searchButton

    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data) 
        
        for (var i = 0; i < data.length; i++) {
            
            
        }
    });
    
}    
    
}
    
searchButton.addEventListener('click', getApi);