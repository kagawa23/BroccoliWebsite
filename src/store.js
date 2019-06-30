import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxReset from 'redux-reset';
import rootReducer from './reducers';

import Action from './constants/action';

const enhancerItems = [
  applyMiddleware(thunkMiddleware),
  reduxReset({
    type: Action.RESET_STATE,
    data: 'payload'
  })
];

if (window.devToolsExtension && process.env.NODE_ENV !== 'production') {
  enhancerItems.push(window.devToolsExtension());
}

const enhancers = compose.apply(this, enhancerItems);

const store = createStore(rootReducer, enhancers);
export default store;
