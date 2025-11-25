import './FancyBorder.css'
import React, {useState} from "react";

function FancyBorder(props){
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
      </div>

    );
}
export default FancyBorder;
