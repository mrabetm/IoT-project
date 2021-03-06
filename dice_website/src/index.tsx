import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import reportWebVitals from './reportWebVitals';
import Body from "./components/Body";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "chart.js";
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Body />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
