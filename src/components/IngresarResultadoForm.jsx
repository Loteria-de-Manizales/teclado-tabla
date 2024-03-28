import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { createResultado } from "../api/axios/resultados.api";
import { getAllPremios } from "../api/axios/premios.api";
//import { SorteosDropDown } from "./SorteosDropDown";

import "./IngresarResultadoForm.css"
import { ContadorPremios } from "./ContadorPremios";

export const IngresarResultadoForm = () => {

  const navigate = useNavigate();

  const [selectedInput, setSelectedInput] = useState(null);
  const [inputValues, setInputValues] = useState(Array(6).fill(''));
  const [entradas, setEntradas] = useState('')

  const [numero, setNumero] = useState('')
  const [serie, setSerie] = useState('')
  const [totalPremios, setTotalPremios] = useState(0);
  const [contadorPremio, setContadorPremio] = useState(0)  

  const [premios, setPremios] = useState([]);
  
  // Obtener datos de la API
  useEffect(() => {
    CargarArrayPremios()
  }, []);

  async function CargarArrayPremios() {
       //setIsLoading(true);
       const response = await getAllPremios();
       console.log('Premios: ', response.data)
       setPremios(response.data);       
       setTotalPremios(response.data.length);
       //setIsLoading(false);
      
     }


  let sorteo = 1;


  const handleSubmit = async (data) => {        
    setContadorPremio(contadorPremio+1)
    await createResultado(resultado)
    setInputValues(Array(6).fill(''))
    // navigate("/ingresar-resultado")
  };

  useEffect(() => {
    setEntradas(inputValues.join(""));
    setNumero(entradas.substring(0, 4));
    setSerie(entradas.substring(4, 7));
    
  }, [handleSubmit])

  const handleButtonClick = (digit) => {

    if (selectedInput !== null) {

      const updatedValues = [...inputValues];

      if (selectedInput === 4) {
        if (updatedValues[selectedInput].length < 2) {
          updatedValues[selectedInput] += digit;
        } 
        else {
           updatedValues[selectedInput] = '';
        }
      }
      else {
        if (updatedValues[selectedInput].length < 1) {
          updatedValues[selectedInput] = digit;
        } 
        else {
           updatedValues[selectedInput] = '';
        }
      }

      setInputValues(updatedValues);
    }
  };

  const resultado = {
    "sorteo": sorteo,
    "premio": contadorPremio,
    "numero": numero,
    "serie": serie
  }

  return (
    <>
     
   <form onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>
       
       
        <div className="container justify-content-center">

        <h1>
            {
            contadorPremio ? premios[contadorPremio].titulo : "PREMIOS"
            }
          </h1>
          <h1><span>NÚMEROS : </span>{numero}</h1>
          <h1><span>SERIE   : </span>{serie}</h1>

        </div>

        <div className="container custom-container-inputs mt-5">
          <div className="row" >


            {inputValues.map((value, index) => (
              <div key={index} className="col-md-2" >
                <input
                  readOnly={true}
                  type="text"
                  value={value}
                  onChange={(e) => setInputValues(e.target.value)}
                  onFocus={() => setSelectedInput(index)}
                  className="custom-input"
                  id={index}
                />
              </div>
            ))}

          </div>
        </div>

        <div className="container custom-container-buttons mt-5">
          <div className="row">

            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(7)}
                value='7'
              />
            </div>
            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(8)}
                value='8'
              />
            </div>
            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(9)}
                value='9'
              />
            </div>

            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(4)}
                value='4'
              />
            </div>
            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(5)}
                value='5'
              />
            </div>
            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(6)}
                value='6'
              />
            </div>

            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(1)}
                value='1'
              />
            </div>
            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(2)}
                value='2'
              />
            </div>
            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(3)}
                value='3'
              />

            </div>

            <div className="col-4 col-md-4 d-flex justify-content-center">
              <input
                type="button"
                className="btn btn-square"
                onClick={() => handleButtonClick(0)}
                value='0'
              />

            </div>
            <div className="col-4 col-md-4 d-flex justify-content-center">
              <button className="btn btn-rectangle" >
                ENVIAR
              </button>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-right">

            </div>


          </div>
        </div>

      </form>
    </>
  )
}
