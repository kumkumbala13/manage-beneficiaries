// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css'; // Assuming you have a global CSS file for Tailwind styles

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client

root.render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
      
    </Provider>
  </React.StrictMode>
);
