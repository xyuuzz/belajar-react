import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactRouter from './6.react-router/ReactRouter';
import {BrowserRouter}  from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  {/* 
    Ketika menggunakan react router, component yang menerpkan fiturnya, wajib dibungkus oleh component BrowserRouter yang disediakan oleh react-router-dom 
  */}
    <BrowserRouter>
        <ReactRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();