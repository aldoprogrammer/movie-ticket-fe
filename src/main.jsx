import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css'
import { AldoAlertProvider } from 'aldo-alert';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>

    <AldoAlertProvider>
      <App />
    </AldoAlertProvider>
  </Router>
  </React.StrictMode>,

);