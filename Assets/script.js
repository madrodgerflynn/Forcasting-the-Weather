var searchButton = document.getElementById("button-addon1");
var APIkey = "93b1a8aba548ebcefe09b6f2e82b258f";
var city;

function getApi() {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data) 

      for (var i = 0; i < data.length; i++) {
    
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

    
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
            
    
}
    
searchButton.addEventListener('click', getApi);