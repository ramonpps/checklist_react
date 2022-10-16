import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Greeting from './greeting';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting /> <App />
  </React.StrictMode>
);
