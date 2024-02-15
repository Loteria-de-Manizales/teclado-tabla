import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file for styling

export const DigitInput1 = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      maxLength={1}
      className="digit-input"
    />
  );
};

export const App = () => {
  const [inputs, setInputs] = useState(['', '', '', '', '', '']);
  const [selectedInput, setSelectedInput] = useState(null);

  const handleDigitClick = (digit) => {
    if (selectedInput !== null) {
      const updatedInputs = [...inputs];
      updatedInputs[selectedInput] += digit;
      setInputs(updatedInputs);
    }
  };

  const handleClear = () => {
    setInputs(['', '', '', '', '', '']);
  };

  const handleSend = () => {
    // Implement your logic to send the input values
    console.log('Input values:', inputs);
  };

  return (
    <div className="app-container">
      <div className="inputs-row">
        {inputs.map((value, index) => (
          <DigitInput1
            key={index}
            value={value}
            onChange={(e) => {
              const updatedInputs = [...inputs];
              updatedInputs[index] = e.target.value;
              setInputs(updatedInputs);
            }}
          />
        ))}
      </div>
      <div className="buttons-row">
        {[7, 8, 9].map((digit) => (
          <button
            key={digit}
            className="digit-button"
            onClick={() => handleDigitClick(digit)}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className="buttons-row">
        {[4, 5, 6].map((digit) => (
          <button
            key={digit}
            className="digit-button"
            onClick={() => handleDigitClick(digit)}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className="buttons-row">
        {[1, 2, 3].map((digit) => (
          <button
            key={digit}
            className="digit-button"
            onClick={() => handleDigitClick(digit)}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className="buttons-row">
        <button className="digit-button" onClick={() => handleDigitClick(0)}>
          0
        </button>
        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};
