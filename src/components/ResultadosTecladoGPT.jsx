import React, { useState } from 'react';
import './ResultadosTecladoGPT.css'

const InputComponent = ({ tabIndex, maxLength, onEnter }) => {
  const handleKeyDown = (event) => {
    const { key, target } = event;

    // Permitir solo dígitos numéricos del 0 al 9
    if (!/^\d$/.test(key) && key !== 'Backspace') {
      event.preventDefault();
    }

    // Mover al siguiente input al ingresar el número completo
    if (/^\d$/.test(key)) {
      setTimeout(() => {
        if (target.value.length >= maxLength) {
          onEnter(tabIndex + 1);
        }
      }, 0);
    } else if (key === 'ArrowRight' || key === 'ArrowLeft') {
      event.preventDefault(); // Prevenir el comportamiento predeterminado de las teclas de flecha
      const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
      let nextTabIndex;

      if (key === 'ArrowRight') {
        nextTabIndex = tabIndex + 1;
        if (nextTabIndex >= inputs.length) nextTabIndex = 0;
      } else if (key === 'ArrowLeft') {
        nextTabIndex = tabIndex - 1;
        if (nextTabIndex < 0) nextTabIndex = inputs.length - 1;
      }

      inputs[nextTabIndex].focus();
    }
  };

  return (
    <input
      type="text"
      tabIndex={tabIndex}
      maxLength={maxLength}
      onKeyDown={handleKeyDown}
      style={{ display: 'block', margin: '10px 0', width: '40px', textAlign: 'center' }}
    />
  );
};

const ResultadosTecladoGPT = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  const handleEnter = (nextTabIndex) => {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
    if (nextTabIndex >= inputs.length) nextTabIndex = 0;
    inputs[nextTabIndex].focus();
    setFocusIndex(nextTabIndex);
  };

  return (
    <form>
      <InputComponent tabIndex={0} maxLength={1} onEnter={handleEnter} />
      <InputComponent tabIndex={1} maxLength={1} onEnter={handleEnter} />
      <InputComponent tabIndex={2} maxLength={1} onEnter={handleEnter} />
      <InputComponent tabIndex={3} maxLength={1} onEnter={handleEnter} />
      <InputComponent tabIndex={4} maxLength={2} onEnter={handleEnter} />
      <InputComponent tabIndex={5} maxLength={1} onEnter={handleEnter} />
    </form>
  );
};

export default ResultadosTecladoGPT;