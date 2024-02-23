import { useState} from "react"
import { useNavigate } from "react-router-dom";
import { createResultado } from "../api/axios/resultados.api";
import "./AgregarResultadoForm.css"

export const AgregarResultadoForm = () => {

const navigate = useNavigate();
 
const [selectedInput, setSelectedInput] = useState(null);
const [inputValues, setInputValues] = useState(Array(6).fill(''));


const [numero, setNumero] = useState('')
const [serie, setSerie] = useState('')

 let sorteo = 1;
 let premio = 4;
// let numero='0303';
// let serie= '003';

const handleSubmit =  async (data) => { 
     
  console.log('Numero : ',inputValues.join("").substring(0,4))
  console.log('Serie : ',inputValues.join("").substring(4,7))

    //console.log('Serie:', serie)
    //console.log(resultado)
    // await createResultado(resultado)
    //console.log(data)
    navigate("/agregar-resultado")

  };

const handleButtonClick = (digit) => {
  
   if (selectedInput !== null) {
    
       const updatedValues = [...inputValues];

       if (selectedInput === 4){        
        if (updatedValues[selectedInput].length < 2){
            updatedValues[selectedInput] += digit;                
        }else{
            updatedValues[selectedInput] = '';
        }
         
       }
       else{
        if (updatedValues[selectedInput].length < 1){
            updatedValues[selectedInput] = digit;                
        }else{
            updatedValues[selectedInput] = '';
        }
    
       } 
       
       setInputValues(updatedValues);
   }
};

const resultado = {
    "sorteo": sorteo,
    "premio": premio,
    "numero": numero,
    "serie" : serie
  }

 

  return (
    <>
        <form onSubmit={(event) => {event.preventDefault(); handleSubmit();}}>
      <div className="container custom-container-inputs mt-5">
        <div className="row">

          
            {inputValues.map((value, index) => (
                    <div key={index} className="col-md-2">
                        <input
                            type="text"
                            minLength={1}
                            maxLength={2}
                            value={value}
                            onChange={(e) => setInputValues(e.target.value)}
                            onFocus={() => setSelectedInput(index)}
                            className="custom-input"
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
          
          </div>
          <div className="col-4 col-md-2 d-flex justify-content-right">
          <button
                  className="btn btn-rectangle"
              >
                  ENVIAR
              </button>
          </div>
           

        </div>
      </div>
      </form>
    </>
  )
}
