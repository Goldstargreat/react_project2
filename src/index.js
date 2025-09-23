import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from "./chp05/CommentList";
import Notification from "./chp06/Notification";
import NotificationList from "./chp06/NotificationList";
import Counter from "./chp07/exam01/Counter";
import Accomodate from "./chp07/Accomodate";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Accomodate/>
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
