import { useState, useEffect } from "react"
import './ResultadosTecladoVivo.css'

export const ResultadosTecladoVivo = ({ vivo, setVivo }) => {

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

  const [urna1, setUrna1] = useState('')
  const [urna2, setUrna2] = useState('')
  const [urna3, setUrna3] = useState('')
  const [urna4, setUrna4] = useState('')
  const [urna5, setUrna5] = useState('')
  const [urna6, setUrna6] = useState('')
  
  const [contadorPremio, setContadorPremio] = useState(0)
  const [selectedInput, setSelectedInput] = useState(null);
  
  useEffect(() => {
    setUrna1(urna1);
    setUrna2(urna2);
    setUrna3(urna3);
    setUrna4(urna4);
    setUrna5(urna5);
    setUrna6(urna6);     
  }, [urna1, urna2, urna3, urna4, urna5, urna6])

  const onUrna1Change = (event) => {
    setUrna1(event.target.value);
    if(urna1.length>=0){
      setSelectedInput(1)
      selectedInput(1).focus()
      //alert(selectedInput)
    }
  };

  const onUrna2Change = (event) => {
    setUrna2(event.target.value);
  };

  const onUrna3Change = (event) => {
    setUrna3(event.target.value);
  };

  const onUrna4Change = (event) => {
    setUrna4(event.target.value);
  };

  const onUrna5Change = (event) => {
    setUrna5(event.target.value);
  };

  const onUrna6Change = (event) => {
    setUrna6(event.target.value);
  };

  const handleKeyPress = (event) => {
    if(event.keyCode === 37) { 
      console.log('Presionó tecla izquierda')
      alert(event.target.value); 
    } else {
        if (event.keyCode === 39) { 
            console.log('Presionó tecla derecha')
            alert(event.target.value);
        }
    }
     
  }
  

  const handleSubmit = async (data) => {
    console.log('Presionó el botón enviar')
    alert('Presionó botón enviar');
  };

    const handleClickNext = () => {
    setContadorPremio(contadorPremio + 1)
  }

  const handleClickPrev = () => {
    setContadorPremio(contadorPremio - 1)
  }


  return (
    <>
      <form onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h2> {contadorPremio ? `PREMIO ${premios[contadorPremio - 1].titulo} POR ${premios[contadorPremio - 1].valor}` : "PREMIOS"} </h2>

              <h1> {`NÚMERO:  SERIE: `} </h1>

              <div className="container custom-container-inputs mt-5">
                <div className="row" >
                  {/* <div className="col-md-2"> */}
                  <input
                    type="text"
                    value={urna1}
                    //onFocus={() => setSelectedInput(0)}
                    onChange={onUrna1Change}
                    className="custom-input"
                    onKeyDown={handleKeyPress}
                  />
                  <input
                    type="text"
                    value={urna2}
                    //onFocus={() => setSelectedInput(1)}
                    onChange={onUrna2Change}
                    className="custom-input"
                    onKeyDown={handleKeyPress}
                  />
                  <input
                    type="text"
                    value={urna3}
                    //onFocus={() => setSelectedInput(2)}
                    onChange={onUrna3Change}
                    className="custom-input"
                    onKeyDown={handleKeyPress}
                  />
                  <input
                    type="text"
                    value={urna4}
                    //onFocus={() => setSelectedInput(3)}
                    onChange={onUrna4Change}
                    className="custom-input"
                    onKeyDown={handleKeyPress}
                  />
                  <input
                    type="text"
                    value={urna5}
                    //onFocus={() => setSelectedInput(4)}
                    onChange={onUrna5Change}
                    className="custom-input"
                    onKeyDown={handleKeyPress}
                  />
                  <input
                    type="text"
                    value={urna6}
                    //onFocus={() => setSelectedInput(5)}
                    onChange={onUrna6Change}
                    className="custom-input"
                    onKeyDown={handleKeyPress}
                  />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleClickPrev} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button onClick={handleClickNext} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-4 col-md-4 d-flex justify-content-center">
          <button className="btn btn-rectangle" >
            ENVIAR
          </button>
        </div>
      </form>

    </>
  )
}
