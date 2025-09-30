import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Toggle from "./chp08/Toggle";
import Toggle_2 from "./chp08/Toggle_2";
import Toggle_3_NewSyntax from "./chp08/Toggle_3_NewSyntax";
import ToggleFunction from "./chp08/ToggleFunction";
import MyButton_Argument from "./chp08/MyButton_Argument";
import InputTest from "./chp08/InputTest";
import ConfirmButtonFunction from "./chp08/ConfirmButtonFunction";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ConfirmButtonFunction/>
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
