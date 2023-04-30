
window.onload = pageLoad;
function pageLoad() {
  const apiKey = 'yiVAx0WsTqB1wLo5s0WYChEHnfwK92Be';
  const locationKey = '2089870';
  const apiUrl = `https://cors-anywhere.herokuapp.com/https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}`;


  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {



          for (var i = 0; i < 12; i++) {

              var time = data[i].DateTime;
              var newTime = time.substring(11, 13);


              // Convert military time to integer
              var hours = parseInt(newTime);

              // Determine AM or PM
              var ampm = (hours < 12) ? "AM" : "PM";

              // Convert hours to standard time
              hours = (hours > 12) ? hours - 12 : hours;
              hours = (hours == 0) ? 12 : hours;

              // Return formatted time string
              var finalTime = hours + " " + ampm;

              document.getElementById("time" + (i + 1)).innerHTML = finalTime;

              var weatherIconNum = data[i].WeatherIcon;
              if (weatherIconNum < 10) {
                  weatherIconNum = "0" + weatherIconNum;
              }

              var imageNum = "https://developer.accuweather.com/sites/default/files/" + weatherIconNum + "-s.png"

              document.getElementById("weatherimg" + (i + 1)).setAttribute("src", imageNum);

              document.getElementById("temp" + (i + 1)).innerHTML = data[i].Temperature.Value + "° F";

              if (data[i].HasPrecipitation == true) {
                  document.getElementById("weather" + (i + 1)).innerHTML = data[i].PrecipitationIntensity + " " + data[i].PrecipitationType;
              } else if (data[i].HasPrecipitation == false) {
                  document.getElementById("weather" + (i + 1)).innerHTML = data[i].IconPhrase;
              } else {

              }

          }
      })
      .catch(error => console.error(error));
}

