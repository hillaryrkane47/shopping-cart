import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import 'bootstrap/dist/css/bootsrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
