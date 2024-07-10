import React, { useState, useEffect } from "react";
import "./FormularioTeclado.css";

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
      //   style={{
      //     display: "block",
      //     margin: "10px 0",
      //     width: "40px",
      //     textAlign: "center",
      //     caretColor: "transparent",
      //   }}
      disabled={disabled}
      className="custom-input"
    />
  );
};

const FormularioTeclado = () => {
  const premios = [
    {
      id: 1,
      titulo: "SECO 36",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 2,
      titulo: "SECO 35",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 3,
      titulo: "SECO 34",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 4,
      titulo: "SECO 33",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 5,
      titulo: "SECO 32",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 6,
      titulo: "SECO 31",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 7,
      titulo: "SECO 30",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 8,
      titulo: "SECO 29",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 9,
      titulo: "SECO 28",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 10,
      titulo: "SECO 27",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 11,
      titulo: "SECO 26",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 12,
      titulo: "SECO 25",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 13,
      titulo: "SECO 24",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 14,
      titulo: "SECO 23",
      valor: "20 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 15,
      titulo: "SECO 22",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 16,
      titulo: "SECO 21",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 17,
      titulo: "SECO 20",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 18,
      titulo: "SECO 19",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 19,
      titulo: "SECO 18",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 20,
      titulo: "SECO 17",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 21,
      titulo: "SECO 16",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 22,
      titulo: "SECO 15",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 23,
      titulo: "SECO 14",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 24,
      titulo: "SECO 13",
      valor: "30 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 25,
      titulo: "SECO 12",
      valor: "60 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 26,
      titulo: "SECO 11",
      valor: "60 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 27,
      titulo: "SECO 10",
      valor: "60 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 28,
      titulo: "SECO 09",
      valor: "60 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 29,
      titulo: "SECO 08",
      valor: "60 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 30,
      titulo: "SECO 07",
      valor: "80 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 31,
      titulo: "SECO 06",
      valor: "80 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 32,
      titulo: "SECO 05",
      valor: "80 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 33,
      titulo: "SECO 04",
      valor: "80 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 34,
      titulo: "SECO 03",
      valor: "80 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 35,
      titulo: "SECO 02",
      valor: "100 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 36,
      titulo: "SECO 01",
      valor: "100 MILLONES DE PESOS",
      plan: 1,
    },
    {
      id: 37,
      titulo: "MAYOR",
      valor: "2.200 MILLONES DE PESOS",
      plan: 1,
    },
  ];
  const [inputs, setInputs] = useState(Array(6).fill(""));
  const [concatenatedValues, setConcatenatedValues] = useState("");
  const [storedValues, setStoredValues] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [contadorPremio, setContadorPremio] = useState(0);

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
    alert("Sin instrucciones");
  };

  const handleArrowDown = () => {
    const concatenated = inputs.join("");
    const numPremios = 37;
    setConcatenatedValues(concatenated);
    const newStoredValue = {
      id: numPremios - storedValues.length,
      value: concatenated,
    };

    setStoredValues([...storedValues, newStoredValue]);

    setInputs(Array(6).fill(""));
    setDisabled(false);
    const input = document.querySelector('input[tabIndex="0"]');
    if (input) {
      input.focus();
    }
    setContadorPremio(contadorPremio + 1);
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
        <div className="texto">
          {contadorPremio
            ? `PREMIO ${premios[contadorPremio].titulo}\nPOR ${premios[contadorPremio].valor}`
            : `PREMIO ${premios[0].titulo}\nPOR ${premios[0].valor}`}
        </div>

        <div className="custom-container-inputs">
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
        </div>
      </form>
      <p>Valores concatenados: {concatenatedValues}</p>
      <ul>
        {storedValues.map((item) => (
          <li key={item.id}>
            {item.id}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormularioTeclado;
