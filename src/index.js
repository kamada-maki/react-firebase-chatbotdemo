import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TourProvider } from '@reactour/tour';

const steps = [
  {
    selector: '.first',
    content: "私が返答しまっせ"
  },
  {
    selector: '.second',
    content: "選んでくださいまし"
  },
  {
    selector: '.third',
    content: "回答ここに出るぜ★"
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
