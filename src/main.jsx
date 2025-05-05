import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer theme='dark' autoClose={1500} />
    </Provider>
  </React.StrictMode>
);
