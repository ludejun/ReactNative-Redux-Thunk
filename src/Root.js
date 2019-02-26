import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';
import App from './App';

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];
const store = createStore(
  reducers,
  /* preloadedState, */
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any);
  )
);

if (module.hot) {
  // Enable hot module replacement for reducers
  module.hot.accept(() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
