import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { updateTextColor, updateBackgroundColor, updateFavoriteCity } from './redux/userSettingsActions';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const textColor = localStorage.getItem('textColor');
const backgroundColor = localStorage.getItem('backgroundColor');
const favoriteCity = localStorage.getItem('favoriteCity');

store.dispatch(updateTextColor(textColor));
store.dispatch(updateBackgroundColor(backgroundColor));
store.dispatch(updateFavoriteCity(favoriteCity));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);