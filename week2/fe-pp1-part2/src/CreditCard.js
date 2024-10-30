import React from 'react'
import logoVisa from './images/visa.png'
import logoMaster from './images/master.png'
import "./style.css"

function CreditCard(props) {
    const colors = () =>{
        return {color:props.color, background:props.bgColor};
    } 

    const cardLogo = () => {
        return (props.type == "Visa") ? logoVisa : logoMaster;
    }

    const formatCCNum = (number) => {
        const dot = '\u2022'; //bullet/dot char
        return (number.slice(0, -4).replace(/\d/g, dot) + number.slice(-4)).replace(/(.{4})/g, '$1 ');
    };

  return (
    <div className="credit" style={colors()}>

        <div><img className="logo" src={cardLogo()} alt="This is an image" /> </div>
        
        <div className="cc-num">
            <p>{formatCCNum(props.number)}</p>
        </div>

        <div>
            <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p> 
            <p>{props.owner}</p> 
        </div>

     
    </div>
  )
}

export default CreditCard
