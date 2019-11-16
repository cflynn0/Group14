import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Forecast from './Forecast';
import mainPage from './mainPage';
import Dashboard from './Dashboard';
import Weather from './Weather';
import Form from './form.component';
import 'weather-icons/css/weather-icons.css';

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = "d5ccbf0720a64d41fc76091f3fac6ba2";

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        city: undefined,
        country: undefined,
        icon: undefined,
        main: undefined,
        fahrenheit: undefined,
        celsius: undefined,
        max_temp: undefined,
        min_temp: undefined,
        description: "",
        error: false
      };

      this.weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog",
      }
    }

    calCelsius(temp){
      let cel = Math.floor(temp-273.15)
      return cel;
    }

    calFarenheit(temp){
      let cel = this.calCelsius(temp);
      let far = Math.floor(cel * (9/5) + 32);
      return far;
    }

    get_WeatherIcon(icons, rangeId){
      switch(true){
        case rangeId >= 200 && rangeId <= 232:
          this.setState({icon:this.weatherIcon.Thunderstorm});
          break;
        case rangeId >= 300 && rangeId <= 321:
          this.setState({
              icon: this.weatherIcon.Drizzle
            });
          break;
        case rangeId >= 500 && rangeId <= 531:
          this.setState({
            icon: this.weatherIcon.Rain
            })
          break;
        case rangeId >= 600 && rangeId <= 622:
          this.setState({
            icon: this.weatherIcon.Snow
          });
          break;
        case rangeId >= 701 && rangeId <= 781:
          this.setState({
              icon: this.weatherIcon.Atmosphere
            })
          break;
        case rangeId === 800:
          this.setState({
              icon: this.weatherIcon.Clear
            })
          break;
        case rangeId >= 801 && rangeId <= 804:
          this.setState({
              icon: this.weatherIcon.Clouds
            })
          break;
        default:
          this.setState({icon: this.weatherIcon.Clouds});
      }
    }

    getCurrentWeather = async (event) => { 

      event.preventDefault();

      const country = event.target.elements.country.value;
      const city = event.target.elements.city.value;

      if(country && city)
      {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

        const response = await api_call.json();

        console.log(response);

        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          fahrenheit: this.calFarenheit(response.main.temp),
          celsius: this.calCelsius(response.main.temp),
          max_temp: this.calFarenheit(response.main.temp_max),
          min_temp: this.calFarenheit(response.main.temp_min),
          description: response.weather[0].description,
          error: false
        });

        this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
      }else{
        this.setState({error: true})
      }
    };

    render(){
      return(
        <div className="App">
          <Form loadWeather={this.getCurrentWeather} error={this.state.error}/>

          <Weather 
            city={this.state.city} 
            country={this.state.country} 
            temp_fahrenheit={this.state.fahrenheit}
            min_temp={this.state.min_temp}
            max_temp={this.state.max_temp}
            description={this.state.description}
            weatherIcon={this.state.icon}
          />
        </div>
      /*<div>
        <Switch>
          <Route path='/forecast' component={Forecast}/>
          <Route path='/weather' component={mainPage}/>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </div>*/
    );
  }
}

export default App;