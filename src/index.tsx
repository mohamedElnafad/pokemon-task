import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app-store/store.ts';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Provider store={store} children={<App />}></Provider>);
