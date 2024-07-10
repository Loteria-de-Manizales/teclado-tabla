import React, { useState, useEffect } from "react";

const InputComponent = ({
  tabIndex,
  maxLength,
  onEnter,
  onAllInputsFilled,
  value,
  onChange,
  disabled,
  onArrowUp,
  onArrowDown,
}) => {
  const handleKeyDown = (event) => {
    const { key, target } = event;

    // Permitir solo dígitos numéricos del 0 al 9
    if (!/^\d$/.test(key) && key !== "Backspace") {
      event.preventDefault();
    }

    // Mover al siguiente input al ingresar el número completo
    if (/^\d$/.test(key)) {
      setTimeout(() => {
        if (target.value.length >= maxLength) {
          onEnter(tabIndex + 1);
        }
      }, 0);
    } else if (key === "ArrowRight" || key === "ArrowLeft") {
      event.preventDefault(); // Prevenir el comportamiento predeterminado de las teclas de flecha
      const inputs = Array.from(
        document.querySelectorAll('input[type="text"]')
      );
      let nextTabIndex;

      if (key === "ArrowRight") {
        nextTabIndex = tabIndex + 1;
        if (nextTabIndex >= inputs.length) nextTabIndex = 0;
      } else if (key === "ArrowLeft") {
        nextTabIndex = tabIndex - 1;
        if (nextTabIndex < 0) nextTabIndex = inputs.length - 1;
      }

      inputs[nextTabIndex].focus();
    } else if (key === "Enter") {
      event.preventDefault();
      onAllInputsFilled();
    } else if (key === "ArrowUp") {
      event.preventDefault();
      onArrowUp();
    } else if (key === "ArrowDown") {
      event.preventDefault();
      onArrowDown();
    }
  };

  return (
    <input
      type="text"
      tabIndex={tabIndex}
      maxLength={maxLength}
      onKeyDown={handleKeyDown}
      value={value}
      onChange={(e) => onChange(tabIndex, e.target.value)}
      style={{
        display: "block",
        margin: "10px 0",
        width: "40px",
        textAlign: "center",
        caretColor: "transparent",
      }}
      disabled={disabled}
    />
  );
};

const FormularioGPT = () => {
  const [inputs, setInputs] = useState(Array(6).fill(""));
  const [concatenatedValues, setConcatenatedValues] = useState("");
  const [storedValues, setStoredValues] = useState(Array(6).fill(""));
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleEnter = (nextTabIndex) => {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
    if (nextTabIndex >= inputs.length) nextTabIndex = 0;
    inputs[nextTabIndex].focus();
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleArrowUp = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }

    const concatenated = inputs.join("");
    setConcatenatedValues(concatenated);

    const newStoredValues = [...storedValues];
    newStoredValues[counter] = concatenated;
    setStoredValues(newStoredValues);

    setInputs(Array(6).fill(""));
    setDisabled(false);
    const input = document.querySelector('input[tabIndex="0"]');
    if (input) {
      input.focus();
    }
  };

  const handleArrowDown = () => {
    const concatenated = inputs.join("");
    setConcatenatedValues(concatenated);

    const newStoredValues = [...storedValues];
    newStoredValues[counter] = concatenated;
    setStoredValues(newStoredValues);

    if (counter < storedValues.length - 1) {
      setCounter(counter + 1);
    }

    setInputs(Array(6).fill(""));
    setDisabled(false);
    const input = document.querySelector('input[tabIndex="0"]');
    if (input) {
      input.focus();
    }
  };

  const checkAllInputsFilled = () => {
    const allFilled = inputs.every((value, index) => {
      const maxLength = index === 4 ? 2 : 1;
      return value.length === maxLength;
    });

    if (allFilled) {
      handleArrowDown();
      setDisabled(true);
    }
  };

  useEffect(() => {
    const input = document.querySelector('input[tabIndex="0"]');
    if (input) {
      input.focus();
    }
  }, []);

  return (
    <div>
      <form>
        <InputComponent
          tabIndex={0}
          maxLength={1}
          onEnter={handleEnter}
          value={inputs[0]}
          onChange={handleInputChange}
          onAllInputsFilled={checkAllInputsFilled}
          disabled={disabled}
          onArrowUp={handleArrowUp}
          onArrowDown={handleArrowDown}
        />
        <InputComponent
          tabIndex={1}
          maxLength={1}
          onEnter={handleEnter}
          value={inputs[1]}
          onChange={handleInputChange}
          onAllInputsFilled={checkAllInputsFilled}
          disabled={disabled}
          onArrowUp={handleArrowUp}
          onArrowDown={handleArrowDown}
        />
        <InputComponent
          tabIndex={2}
          maxLength={1}
          onEnter={handleEnter}
          value={inputs[2]}
          onChange={handleInputChange}
          onAllInputsFilled={checkAllInputsFilled}
          disabled={disabled}
          onArrowUp={handleArrowUp}
          onArrowDown={handleArrowDown}
        />
        <InputComponent
          tabIndex={3}
          maxLength={1}
          onEnter={handleEnter}
          value={inputs[3]}
          onChange={handleInputChange}
          onAllInputsFilled={checkAllInputsFilled}
          disabled={disabled}
          onArrowUp={handleArrowUp}
          onArrowDown={handleArrowDown}
        />
        <InputComponent
          tabIndex={4}
          maxLength={2}
          onEnter={handleEnter}
          value={inputs[4]}
          onChange={handleInputChange}
          onAllInputsFilled={checkAllInputsFilled}
          disabled={disabled}
          onArrowUp={handleArrowUp}
          onArrowDown={handleArrowDown}
        />
        <InputComponent
          tabIndex={5}
          maxLength={1}
          onEnter={handleEnter}
          value={inputs[5]}
          onChange={handleInputChange}
          onAllInputsFilled={checkAllInputsFilled}
          disabled={disabled}
          onArrowUp={handleArrowUp}
          onArrowDown={handleArrowDown}
        />
      </form>
      <p>Valores concatenados: {concatenatedValues}</p>
      <ul>
        {storedValues.map((item, index) => (
          <li key={index}>
            {index}: {item}
          </li>
        ))}
      </ul>
      <p>Contador: {counter}</p>
    </div>
  );
};

export default FormularioGPT;
