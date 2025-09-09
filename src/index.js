import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './chp04/Clock';
import Clock from "./chp04/Clock";
import './chp04/Clock.css';
import Comment from "./chp05/exam01/Comment";
import Booklist from "./chp05/exam02/Booklist";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Booklist />
    </React.StrictMode>
);

// setInterval(()=>{
//     root.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>
//     );
// }, 1000)

reportWebVitals();
