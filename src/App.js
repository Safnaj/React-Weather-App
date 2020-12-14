import React from 'react';
import Weather from './components/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import './App.css';

const API_KEY = "9402da6bd74c395f71604c624cc2b231";
const API_KEY2 = "429736441cf3572838aa10530929f7cd";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();
  }

calCelsius(temp){
  let cell = Math.floor(temp - 273.15);
  return cell;
}

  getWeather = async () =>{
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const response = await api.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min)
    });
  }

  render() { 
    return (  
      <div className="App">
        <Weather 
          city={this.state.city} 
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}
 
export default App;
