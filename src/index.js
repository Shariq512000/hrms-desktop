import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router';
import { HashRouter } from 'react-router'; 
import ContextProvider from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// Config For Live

// add on BrowserRouter as a prop
//  basename="/new-dashboard"

// Add On Package.json after "version": "0.1.0",
// "homepage": "/new-dashboard",

// change basePath in context.js