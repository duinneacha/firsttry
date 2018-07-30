// app.js

// Init Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI Object
const ui = new UI();



// weather.changeLocation('Miami', 'FL');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  
  // Change Location
  weather.changeLocation(city, state);

  // Persist new city and state to localStorage
  storage.setLocationData(city, state);

  // Get and Display weather
  getWeather();


  // Close Modal - have to use jQuery
  $('#locModal').modal('hide');

})



function getWeather() {
  weather.getWeather()
    .then(result => {
      
      //
      ui.paint(result);
    })
    .catch(err => console.log(err));
}

