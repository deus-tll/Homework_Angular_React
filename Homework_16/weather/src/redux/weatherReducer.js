import * as actionTypes from './actionTypes';

const initialState = {
  data: null,
  error: null
};

export const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {...state, data: action.payload, error: null};
    case actionTypes.FETCH_WEATHER_FAILURE:
      return {...state, data: null, error: action.payload}

    default:
      return state;
  }
};