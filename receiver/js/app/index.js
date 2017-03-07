import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

import configureStore from './store/configure-store';
const store = configureStore();

// Render app
const appEl = document.getElementById('content');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appEl
);
