import { useDispatch, useSelector } from "react-redux";
import { WeatherForm } from "./WeatherForm";
import { WeatherInfo } from "./WeatherInfo";
import {
  updateBackgroundColor,
  updateTextColor,
} from "../redux/userSettingsActions";

export const Weather = () => {
  const textColor = useSelector((state) => state.userSettings.textColor);
  const backgroundColor = useSelector(
    (state) => state.userSettings.backgroundColor
  );

  const compStyle = {
    color: textColor,
    backgroundColor: backgroundColor
  }

  return (
    <>
      <h1 className="text-center">Weather</h1>
      <WeatherForm
        textColor={textColor}
        backgroundColor={backgroundColor}
      />
      <WeatherInfo
        compStyle={compStyle}
      />
    </>
  );
};