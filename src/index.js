import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import Admin from './admin';
// import Home from './pages/route_demo/route1/Home'
import Router from './pages/route_demo/route3/router'
// import registerServiceWorker from './registerServiceWorker'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
