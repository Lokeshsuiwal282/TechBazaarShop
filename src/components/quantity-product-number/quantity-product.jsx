import React, { useState } from "react";
import './quantitystyle.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Quantity_Product =() =>{
    const [inputValue, setinputValue] = useState(1);

    const plus = () => {
        setinputValue(inputValue + 1)
    }

    const minus = () => {
        if (inputValue !== 1) {
            setinputValue(inputValue - 1)
        }
    }
    return (
        <>
            <div className="counterSec mr-3">
                <span className="arrow minus" onClick={minus}><RemoveIcon /></span>
                <span className="value-number">{inputValue}</span>
                <span className="arrow plus" onClick={plus}><AddIcon /></span>
            </div>
        </>
    )
}

export default Quantity_Product;