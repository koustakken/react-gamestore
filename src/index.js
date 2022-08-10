import React from 'react';
import ReactDOM from 'react-dom/client';
//router
import { BrowserRouter } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import { store } from './redux';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
