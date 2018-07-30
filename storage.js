

class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Cork';
    this.defaultState = 'IE';
  }

  getLocationData() {
    
    // Check to see if city already stored in local storage
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    // Check to see if state already stored in local storage
    if(localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}