import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Blocks from "./chp15/Blocks";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
           <Blocks/>
    </React.StrictMode>
);

reportWebVitals();
