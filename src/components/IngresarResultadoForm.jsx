import { useState} from "react"
import "./IngresarResultadoForm.css"

export const IngresarResultadoForm = () => {
 
const [selectedInput, setSelectedInput] = useState(null);
const [inputValues, setInputValues] = useState(Array(6).fill(''));


const [numero, setNumero] = useState()
const [serie, setSerie] = useState()

const handleButtonClick = (digit) => {
  console.log("Digit : ", digit)
  console.log("SelectedInput : ", selectedInput )
  console.log("InputValues: ", inputValues)
  
   if (selectedInput !== null) {
    
       const updatedValues = [...inputValues];

       if (selectedInput == 4){
        updatedValues[selectedInput] += digit;
       }
       else{
        updatedValues[selectedInput] = digit;
       } 
       
       setInputValues(updatedValues);
       console.log("updatedValues: ", updatedValues)
   }
};

// const resultado = {
//    "sorteo": sorteo,
//    "premio": premio,
//    "numero": numero,
//    "serie" : serie
//  }

 

  return (
    <>

      <div className="container custom-container-inputs mt-5">
        <div className="row">

          
            {inputValues.map((value, index) => (
                    <div key={index} className="col-md-2">
                        <input
                            readOnly={true}
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
              <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(7)}
              >
                  7
              </button>                  
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(8)}
              >
                  8
              </button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(9)}
              >
                  9
              </button>
          </div>

          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(4)}
              >
                  4
              </button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(5)}
              >
                  5
              </button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(6)}
              >
                  6
              </button>
          </div>

          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(1)}
              >
                  1
              </button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(2)}
              >
                  2
              </button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(3)}
              >
                  3
              </button>
          </div>

          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(0)}
              >
                  0
              </button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(0)}
              >
                  0
              </button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
          <button
                  className="btn btn-square"
                  onClick={() => handleButtonClick(0)}
              >
                  0
              </button>
          </div>

        </div>
      </div>
    </>
  )
}
