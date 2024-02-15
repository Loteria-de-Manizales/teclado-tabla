import React, { useState } from 'react';
import './Calculator.css'; // Asegúrate de ajustar la ruta correcta

export const Calculator = () => {
  const [inputValues, setInputValues] = useState(Array(6).fill(''));

  const handleButtonClick = (digit) => {
    const updatedValues = [...inputValues];
    updatedValues[5] += digit; // Concatenamos el dígito al último input
    setInputValues(updatedValues);
  };

  const handleClear = () => {
    setInputValues(Array(6).fill(''));
  };

  const handleSubmit = () => {
    // Aquí puedes manejar el envío de datos
    console.log('Datos enviados:', inputValues);
  };

  return (
    <div className="container">
      <div className="row">
        {inputValues.map((value, index) => (
          <div key={index} className="col">
            <input
              type="text"
              value={value}
              onChange={(e) => setInputValues(e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="row">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*'].map((digit) => (
          <div key={digit} className="col">
            <button
              className="btn btn-primary"
              onClick={() => handleButtonClick(digit)}
            >
              {digit}
            </button>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-danger" onClick={handleClear}>
            Limpiar
          </button>
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};