import React from 'react';
import './styles/weather.css';
import GetWeather from './services/getWeather';

class Weather extends React.Component {
  state = { weather: {} };

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = async () => {
    const info = await GetWeather();
    this.setState({
      weather: this.makeState(info),
    }); /*
    try {
      this.setState({
        weather: this.makeState(info),
      });
    } catch (e) {
      throw new UserException(`ERROR IN getWeatherData: ${e}`);
    } */
  };

  makeState(info) {
    return {
      Name: info.name,
      Temperature: info.main.temp,
      Pressure: info.main.pressure,
      Humidity: info.main.humidity,
      Wind: info.wind.speed,
      Description: info.weather[0].description,
      IconUrl: `http://openweathermap.org/img/w/${info.weather[0].icon}.png`,
    };
  }

  render() {
    const {
      Name,
      Temperature,
      Pressure,
      Humidity,
      Wind,
      Description,
      IconUrl,
    } = this.state.weather;
    return (
      <section className="weather-forecast-1">
        <div className="weather-forecast-flex-1">Погода:</div>
        <div className="weather-forecast-flex-2">
          <div className="row-1 middle">
            <div className="img-box">
              <img src={IconUrl} alt={Description} />
            </div>
            <div className="temperature">{Temperature}°C</div>
          </div>

          <div className="row-1 first">
            <h2>{Name}</h2>
            <p>{Description}</p>
          </div>

          <div className="row-1 last">
            <div className="other">Давление: {Pressure} мм</div>
            <div className="other">Влажность: {Humidity}%</div>
            <div className="other">Скорость ветра: {Wind}м/с</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Weather;
