import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { userSettingsReducer } from "./userSettingsReducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  userSettings: userSettingsReducer
});