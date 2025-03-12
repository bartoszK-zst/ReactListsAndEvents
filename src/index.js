import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleList from './components/SimpleList';

const names = [
  {id: 1, name: "Bożena"},
  {id: 2, name: "Bożydar"},
  {id: 3, name: "Błażej"},
  {id: 4, name: "Dżesika"},
  {id: 5, name: "Pietrek"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleList names={names}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
