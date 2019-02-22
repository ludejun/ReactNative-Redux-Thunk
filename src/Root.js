import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './reducers';
import App from './App';

const store = createStore(reducers, devToolsEnhancer());

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
