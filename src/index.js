import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FruitSelect from "./chp11/ex02/FruitSelect";
import Reservation from "./chp11/ex03/Reservation";
import Signup from "./chp11/Signup";
import BoilVerdict from "./chp12/ex01/BoilVerdict";
import ConfirmBoilVerdict from "./chp12/ex01/ConfirmBoilVerdict";
import DistanceConverter from "./chp12/ex02/DistanceConverter";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <DistanceConverter/>
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
