import React from "react";
import './Card.css';

function Card(props) {
    const {title, children} = props;
    return(
        <div className= "card">
            {<h1>{title}</h1>}
            {children}
        </div>
    );
}
export default Card;