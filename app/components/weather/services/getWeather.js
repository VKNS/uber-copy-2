import request from 'axios';

const GetWeather = async () => {
  const cityId = 498817;
  const APPID = 'c9f71aa1af76c39013fd8fd7fa3ad2f0';
  const url = `//api.openweathermap.org/data/2.5/weather?id=${cityId}&lang=ru&units=metric&APPID=${APPID}`;
  const resp = await request.get(url);
  if (resp.ok === false) {
    console.log('didnt get weather data');
    throw error;
  } else {
    const body = await resp.data;
    return body;
  }
};

export default GetWeather;
