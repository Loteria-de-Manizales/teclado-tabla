import { useState } from "react"
import "./AgregarResultadoForm.css"

export const AgregarResultadoForm = () => {
  const [selectedInput, setSelectedInput] = useState(null);
    const [inputValues, setInputValues] = useState(Array(6).fill(''));

    const handleButtonClick = (digit) => {
        if (selectedInput !== null) {
            const updatedValues = [...inputValues];
            updatedValues[selectedInput] += digit;
            setInputValues(updatedValues);
        }
    };


    const handleClear = () => {
      setInputValues(['', '', '', '', '', '']);
    };
   
    const [numero, setNumero] = useState()
    const [serie, setSerie] = useState()

    // const resultado = {
    //   "sorteo": sorteo,
    //   "premio": premio,
    //   "numero": numero,
    //   "serie" : serie
    // }

  return (
    <>

      <div className="container custom-container-inputs mt-5">
        <div className="row">
            {inputValues.map((value, index) => (
                <div key={index} className="col-md-2">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setInputValues(e.target.value)}
                        onFocus={() => setSelectedInput(index)}
                        maxLength={2}
                        className="custom-input"
                        readOnly={true}
                    />
                </div>
            ))}
        </div>
      </div>
      
      <div className="container custom-container-buttons mt-5">
        <div className="row">
        <div className="row">
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 'R', 0, 'E'].map((digit) => (
                    <div key={digit} className="col-md-4">
                        <button
                            className="btn btn-square"
                            onClick={() => handleButtonClick(digit)}
                        >
                            {digit}
                        </button>
                    </div>
                ))}
            </div>
         
        </div>
      </div>
    </>
  )
}
