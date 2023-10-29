import * as actionTypes from './actionTypes';

const initialState = {
  textColor: 'black',
  backgroundColor: 'white',
  favoriteCity: '',
};

export const userSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TEXT_COLOR:
      return { ...state, textColor: action.payload };
    case actionTypes.UPDATE_BACKGROUND_COLOR:
      return { ...state, backgroundColor: action.payload };
    case actionTypes.UPDATE_FAVORITE_CITY:
      return { ...state, favoriteCity: action.payload };
    default:
      return state;
  }
};
