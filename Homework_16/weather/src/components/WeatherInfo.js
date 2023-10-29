import { useSelector } from "react-redux";
import sunriseIcon from "./assets/sunrise.jpg";
import sunsetIcon from "./assets//moon.png";

export const WeatherInfo = ({compStyle}) => {
  const weatherData = useSelector((state) => state.weather.data);
  const error = useSelector((state) => state.weather.error );
  
  if(error){
    return <div className="bg-dark text-danger rounded-5 mt-3 mb-3 pt-4 pb-4 text-xxl-center text-uppercase">Error: {error.message}</div>
  }

  if(weatherData){
    const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

    const currentTime = new Date().getTime() / 1000;
    
    let timeIcon;
    if(currentTime < weatherData.sys.sunrise) {
      timeIcon = <img className="icon" src={sunriseIcon} alt="Sunrise"/>
    }
    else if(currentTime > weatherData.sys.sunset){
      timeIcon = <img className="icon" src={sunsetIcon} alt="Sunset"/>
    }

    return (
      <div style={compStyle} className="mt-4 pt-4 rounded-5">
        <h2>Weather for {weatherData.name}, {weatherData.sys.country}</h2>
        {timeIcon}
        <p>Temperature: {weatherData.main.temp} °C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
    );
  }

  return null;
};