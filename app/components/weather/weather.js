import React from 'react';
import './styles/weather.css';
import GetWeather from './services/getWeather';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: {} };
  }

  componentDidMount = async () => {
    const info = await GetWeather();
    this.setState({
      weather: {
        name: info.name,
        temperature: info.main.temp,
        pressure: info.main.pressure,
        humidity: info.main.humidity,
        wind: info.wind.speed,
        description: info.weather[0].description,
        iconUrl: `http://openweathermap.org/img/w/${info.weather[0].icon}.png`,
      },
    });
  };

  render() {
    const {
      name,
      temperature,
      pressure,
      humidity,
      wind,
      description,
      iconUrl,
    } = this.state.weather;
    return (
      <section className="weather-forecast-1">
        <div className="weather-forecast-flex-1">Погода:</div>
        <div className="weather-forecast-flex-2">
          <div className="row-1 middle">
            <div className="img-box">
              <img src={iconUrl} alt={description} />
            </div>
            <div className="temperature">{temperature}°C</div>
          </div>
          <div className="row-1">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>

          <div className="row-1 last">
            <div className="other">Давление: {pressure} мм</div>
            <div className="other">Влажность: {humidity}%</div>
            <div className="other">Скорость ветра: {wind}м/с</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Weather;
