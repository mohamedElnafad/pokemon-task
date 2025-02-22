import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app-store/store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store} children={<App />}></Provider>
  </React.StrictMode>
);
