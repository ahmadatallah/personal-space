import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { updateServiceWorker } from './store/service-worker-update';
import configureStore from './store/configure-store';

const store = configureStore();

// skipped when there is a solution for service worker with nowjs
// eslint-disable-next-line no-unused-vars
const onUpdate = () => {
  store.dispatch(updateServiceWorker());
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({ onUpdate });
