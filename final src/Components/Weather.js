import React, {Component} from 'react';
import './App.css';
import {Table, Navbar, Nav, NavDropdown, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import WeatherForm from './WeatherForm';
import WeatherComp from './WeatherComp';
import 'weather-icons/css/weather-icons.css';

const API_KEY = "d5ccbf0720a64d41fc76091f3fac6ba2";

function Copyright() {
return (
	<Typography variant="body2" color="textSecondary" align="center">
	{'Copyright © '}
	<Link color="inherit" href="https://material-ui.com/">
		Gustbuddy
	</Link>{' '}
	{new Date().getFullYear()}
	{'.'}
	</Typography>
);
}

class Weather extends Component {
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
	
  return (
    <div className="App">
		<WeatherForm loadWeather={this.getCurrentWeather} error={this.state.error}/>

          <WeatherComp 
            city={this.state.city} 
            country={this.state.country} 
            temp_fahrenheit={this.state.fahrenheit}
            min_temp={this.state.min_temp}
            max_temp={this.state.max_temp}
            description={this.state.description}
            weatherIcon={this.state.icon}
          />
        </div>
  	);
}
}

export default Weather;

/*const Weather = (props) => {
    return(
        <div className="container">
            <div className="cards pt-4">
                <h1>{props.city}</h1> 
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>

                {props.temp_fahrenheit ? (<h1 className="py-2">{props.temp_fahrenheit}&deg;</h1>):null}

                {/**show max and min temp }
                /*{minMaxTemp(props.max_temp, props.min_temp)}
                <h4 className="py-3">{props.description}</h4>
        </div>
       </div> 
    );
};/*
function minMaxTemp(max, min){
    if(min && max){
        return (
            <h3>
                <span className="px-4">{max}&deg;</span>
                <span className="px-4">{min}&deg;</span>
            </h3>
        );
    }
}
*/