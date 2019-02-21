import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './reducers';
import App from './App';

const store = createStore(
  reducers, /* preloadedState, */
  devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  )
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
