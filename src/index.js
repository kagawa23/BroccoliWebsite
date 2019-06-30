import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Application from './containers/app';
import './style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.querySelector('#root')
);
