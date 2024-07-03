import React, { useState, useEffect } from 'react';
import './ResultadosPremiosTeclado.css'
import './PremiosJSON'

const InputComponent = ({ tabIndex, maxLength, onEnter, onAllInputsFilled, value, onChange, disabled }) => {
  const handleKeyDown = (event) => {
    const { key, target } = event;

        // Permitir solo dígitos numéricos del 0 al 9
        if (!/^\d$/.test(key) && key !== 'Backspace' && key !=='Del') {
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
          // else if (key === 'ArrowDown') {
          //   ;
          //   if (nextTabIndex < 0) nextTabIndex = inputs.length - 1;
          // }
    
          inputs[nextTabIndex].focus();
        } else if (key === 'Enter') {
          event.preventDefault();
          onAllInputsFilled();
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
      disabled={disabled}
      className="custom-input"
    />
  );
};

const ResultadosPremiosTeclado = () => {
  const [focusIndex, setFocusIndex] = useState(0);
  const [inputs, setInputs] = useState(Array(6).fill(''));
  const [concatenatedValues, setConcatenatedValues] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [contadorPremio, setContadorPremio] = useState(0)


  const premios = [
    {
      "id": 1,
      "titulo": "SECO 36",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 2,
      "titulo": "SECO 35",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 3,
      "titulo": "SECO 34",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 4,
      "titulo": "SECO 33",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 5,
      "titulo": "SECO 32",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 6,
      "titulo": "SECO 31",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 7,
      "titulo": "SECO 30",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 8,
      "titulo": "SECO 29",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 9,
      "titulo": "SECO 28",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 10,
      "titulo": "SECO 27",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 11,
      "titulo": "SECO 26",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 12,
      "titulo": "SECO 25",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 13,
      "titulo": "SECO 24",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 14,
      "titulo": "SECO 23",
      "valor": "20 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 15,
      "titulo": "SECO 22",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 16,
      "titulo": "SECO 21",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 17,
      "titulo": "SECO 20",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 18,
      "titulo": "SECO 19",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 19,
      "titulo": "SECO 18",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 20,
      "titulo": "SECO 17",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 21,
      "titulo": "SECO 16",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 22,
      "titulo": "SECO 15",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 23,
      "titulo": "SECO 14",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 24,
      "titulo": "SECO 13",
      "valor": "30 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 25,
      "titulo": "SECO 12",
      "valor": "60 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 26,
      "titulo": "SECO 11",
      "valor": "60 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 27,
      "titulo": "SECO 10",
      "valor": "60 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 28,
      "titulo": "SECO 09",
      "valor": "60 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 29,
      "titulo": "SECO 08",
      "valor": "60 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 30,
      "titulo": "SECO 07",
      "valor": "80 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 31,
      "titulo": "SECO 06",
      "valor": "80 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 32,
      "titulo": "SECO 05",
      "valor": "80 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 33,
      "titulo": "SECO 04",
      "valor": "80 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 34,
      "titulo": "SECO 03",
      "valor": "80 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 35,
      "titulo": "SECO 02",
      "valor": "100 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 36,
      "titulo": "SECO 01",
      "valor": "100 MILLONES DE PESOS",
      "plan": 1
    },
    {
      "id": 37,
      "titulo": "MAYOR",
      "valor": "2.200 MILLONES DE PESOS",
      "plan": 1
    },

  ]

  const handleClickNext = () => {
    setDisabled(false);
    setContadorPremio(contadorPremio + 1);
    const concatenated = inputs.join('');
    setConcatenatedValues(concatenated);
    
    const input = document.querySelector('input[tabIndex="0"]');
    if (input) {
      input.focus();
    }
    setInputs(Array(6).fill(''));
  }

  const handleClickPrev = () => {
    setContadorPremio(contadorPremio - 1)
  }

  const handleEnter = (nextTabIndex) => {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));

    if (nextTabIndex >= inputs.length) nextTabIndex = 0;
    inputs[nextTabIndex].focus();
    setFocusIndex(nextTabIndex);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleButtonClick = () => {
    const concatenated = inputs.join('');
    setConcatenatedValues(concatenated);
    //setInputs(Array(6).fill(''));
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
      handleButtonClick();
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
    <>
      <form>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">


              <div className="container custom-container-inputs-sm-12">
                <div className='row'>
                  <div className='texto'>
                    {contadorPremio ? `PREMIO ${premios[contadorPremio - 1].titulo}\nPOR ${premios[contadorPremio - 1].valor}` : "PREMIOS"}
                  </div>
                </div>

                <div className="row" >
                  <div className="col-sm-8">
                    <div className='texto'> {`NÚMERO: `} </div>
                  </div>
                  <div className="col-sm-4">
                    <div className='texto'> {`SERIE: `} </div>
                  </div>
                </div>

                <div className="row" >
                  <div className="col-sm-8">
                    <InputComponent tabIndex={0} maxLength={1} onEnter={handleEnter} value={inputs[0]} onChange={handleInputChange} onAllInputsFilled={checkAllInputsFilled} disabled={disabled} />
                    <InputComponent tabIndex={1} maxLength={1} onEnter={handleEnter} value={inputs[1]} onChange={handleInputChange} onAllInputsFilled={checkAllInputsFilled} disabled={disabled}/>
                    <InputComponent tabIndex={2} maxLength={1} onEnter={handleEnter} value={inputs[2]} onChange={handleInputChange} onAllInputsFilled={checkAllInputsFilled} disabled={disabled}/>
                    <InputComponent tabIndex={3} maxLength={1} onEnter={handleEnter} value={inputs[3]} onChange={handleInputChange} onAllInputsFilled={checkAllInputsFilled} disabled={disabled}/>
                  </div>
                  <div className="col-sm-4">
                    <InputComponent tabIndex={4} maxLength={2} onEnter={handleEnter} value={inputs[4]} onChange={handleInputChange} onAllInputsFilled={checkAllInputsFilled} disabled={disabled}/>
                    <InputComponent tabIndex={5} maxLength={1} onEnter={handleEnter} value={inputs[5]} onChange={handleInputChange} onAllInputsFilled={checkAllInputsFilled} disabled={disabled}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleClickPrev} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button onClick={handleClickNext} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
       


      </form>
      {/* <button onClick={handleButtonClick}>Borrar y Concatenar</button>
      <p>Valores concatenados: {concatenatedValues}</p> */}
    </>
  );
};

export default ResultadosPremiosTeclado;