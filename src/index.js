import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppNumberList from "./chp10/ex01/AppNumberList";
import StudentAttendance from "./chp10/ex02/StudentAttendance";
import AttendanceCard from "./chp10/ex03/AttendanceCard";
import Foodmenu from "./chp10/foodmenu/Foodmenu";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Foodmenu/>
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
