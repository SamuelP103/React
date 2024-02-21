import './quantityPicker.css'
import { useState } from "react";

function QuantityPicker(props){

    const[quantity, setQuantity] =useState (1);
    function decrease(){
        let value = quantity - 1;
        setQuantity(value);
        props.onQuantityChange(value);
    }
    function increase(){
        let value = quantity + 1;
        setQuantity(value)
        props.onQuantityChange(value);
    }
    


    return(
        <div className='quantityPicker'>
        <button className='btn btn-primary btn-outline-dark' onClick={increase}>+</button>
        <label>{quantity}</label>
        <button className='btn btn-primary btn-outline-secondary' disabled = {quantity===1} onClick={decrease}>-</button>
        </div>
    )

    }

export default QuantityPicker;