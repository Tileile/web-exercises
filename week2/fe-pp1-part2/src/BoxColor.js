import React from 'react'
import "./style.css"

function BoxColor(props) {
    const colors = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      };

     const getHex = (num) => {
        return num.toString(16).padStart(2, '0').toUpperCase();
     }
  
    return (
      <div className="box" style={colors}>
        <p>rgb({props.r}, {props.g}, {props.b})</p>
        <p>#{getHex(props.r)}{getHex(props.g)}{getHex(props.b)}</p>
      </div>
    );
  
}

export default BoxColor
