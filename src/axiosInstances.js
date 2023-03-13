import axios from 'axios';

export const geocodingApi = axios.create({
  baseURL: process.env.REACT_APP_OPEN_METEO_GEOCODING_API_URL,
});

export const meteoApi = axios.create({
  baseURL: process.env.REACT_APP_OPEN_METEO_API_URL,
});
