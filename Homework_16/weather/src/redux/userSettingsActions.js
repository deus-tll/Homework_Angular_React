export const updateTextColor = (color) => {
  localStorage.setItem('textColor', color);

  return {
    type: 'UPDATE_TEXT_COLOR',
    payload: color,
  };
};

export const updateBackgroundColor = (color) => {
  localStorage.setItem('backgroundColor', color);

  return {
    type: 'UPDATE_BACKGROUND_COLOR',
    payload: color,
  };
};

export const updateFavoriteCity = (city) => {
  localStorage.setItem('favoriteCity', city);

  return {
    type: 'UPDATE_FAVORITE_CITY',
    payload: city,
  };
};