import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from './app/store';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';


import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
        <Provider store={Store}>
        <App />
        </Provider>
    </Router>
  </React.StrictMode>
);


