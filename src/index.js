import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store/configureStore';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
