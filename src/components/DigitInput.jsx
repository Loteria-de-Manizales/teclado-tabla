import React, { useState } from 'react';
import './DigitInput.css'; // Asegúrate de ajustar la ruta correcta


export const DigitInput = () => {
    const [selectedInput, setSelectedInput] = useState(null);
    const [inputValues, setInputValues] = useState(Array(6).fill(''));

    const handleButtonClick = (digit) => {
        if (selectedInput !== null) {
            const updatedValues = [...inputValues];
            updatedValues[selectedInput] += digit;
            setInputValues(updatedValues);
        }
    };

    return (
        <div className="container">
            <div className="row">
                {inputValues.map((value, index) => (
                    <div key={index} className="col-md-2">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setInputValues(e.target.value)}
                            onFocus={() => setSelectedInput(index)}
                        />
                    </div>
                ))}
            </div>
            <div className="row">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <div key={digit} className="col-md-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleButtonClick(digit)}
                        >
                            {digit}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};