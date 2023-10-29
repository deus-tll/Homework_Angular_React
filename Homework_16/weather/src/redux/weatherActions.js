import axios from "axios";
import * as actionTypes from './actionTypes';

const API_KEY = "7e46227f80e8dde74cb0d4267fc75997";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = (city, country) => async (dispatch) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: `${city},${country}`,
        appid: API_KEY,
        units: "metric"
      },
    });

    dispatch({ type: actionTypes.FETCH_WEATHER_SUCCESS, payload: response.data });
  }
  catch (error) {
    dispatch({ type: actionTypes.FETCH_WEATHER_FAILURE, payload: error });
  }
};