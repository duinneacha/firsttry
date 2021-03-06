// http://api.openweathermap.org/data/2.5/weather?q=Cork,ireland&appid=18619aeeedf1dbe8633af76730b14797
//http://api.wunderground.com/api/99dfe35fcb7de1ee/conditions/q/IE/Cork.json`);

//this.apiKey = '18619aeeedf1dbe8633af76730b14797';
// with thanks from Brad Traversy

class Weather {
  constructor(city, state) {
    this.apiKey = '99dfe35fcb7de1ee';
    this.city = city;
    this.state = state;
  }


  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }


  // Change Weather Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }


}




