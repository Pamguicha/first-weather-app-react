import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App defaultCity = "Santiago" />
      <footer>
         <small>
        <a className="open-source" href="https://github.com/Pamguicha/first-weather-app-react" target="_blank" rel="noopener noreferrer" >
            Open-source code, </a>
        by Pamela Mardones 
    </small>
    </footer>
  </React.StrictMode>
);


reportWebVitals();
