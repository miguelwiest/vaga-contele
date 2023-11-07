import React from 'react';
import {Provider} from 'react-redux';
import store from './createStore';
import App from '../pages/App';

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default ReduxApp;
