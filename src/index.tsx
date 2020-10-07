import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from './store/context';
import App from './App';

/* API Default Setting */
axios.defaults.baseURL = 'http://www.omdbapi.com/';
axios.defaults.params = {
  apikey: process.env.REACT_APP_OMDB_API_KEY,
};

/* DOM render method */
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
