import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherActions";
import {
  updateBackgroundColor,
  updateFavoriteCity,
  updateTextColor,
} from "../redux/userSettingsActions";

export const WeatherForm = ({ textColor, backgroundColor }) => {
  const favoriteCity = useSelector((state) => state.userSettings.favoriteCity);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const compStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let requestedCity;
    
    if (city) {
      requestedCity = city;
    }
    else {
      requestedCity = favoriteCity;
    }
    dispatch(fetchWeather(requestedCity, country));
  };

  const handleTextColorChange = (color) => {
    dispatch(updateTextColor(color));
  };
  const handleBackgroundColorChange = (color) => {
    dispatch(updateBackgroundColor(color));
  };

  const handleFavoriteCityChange = (city) => {
    dispatch(updateFavoriteCity(city));
  };

  return (
    <form
      style={compStyle}
      onSubmit={handleSubmit}
      className="mt-4 pt-4 rounded-5"
    >
      <label className="input-group form-label">
        <input
          className="form-control"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label className="input-group form-label">
        <input
          className="form-control"
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label className="input-group form-label">
        <input
          className="form-control"
          type="text"
          placeholder="Favorite City"
          value={favoriteCity}
          onChange={(e) => handleFavoriteCityChange(e.target.value)}
        />
      </label>
      <label className="input-group form-label">
        <input
          type="color"
          value={textColor}
          onChange={(e) => handleTextColorChange(e.target.value)}
        />
        Text Color
      </label>
      <label className="input-group form-label">
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => handleBackgroundColorChange(e.target.value)}
        />
        Background Color
      </label>
      <div className="d-flex justify-content-center mt-4 mb-3">
        <button className="btn btn-dark" type="submit">
          Get Weather
        </button>
      </div>
    </form>
  );
};
