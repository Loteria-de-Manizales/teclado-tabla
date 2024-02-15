import { useState} from "react"
import "./IngresarResultadoForm.css"

export function IngresarResultadoForm({sorteo, premio}) {
  
 const [unidad, setUnidad] = useState('?');
 const [decena, setDecena] = useState('?');

 const [posicion1, setPosicion1] = useState('?');
 const [posicion2, setPosicion2] = useState('?');
 const [posicion3, setPosicion3] = useState('?');
 const [posicion4, setPosicion4] = useState('?');
 const [posicion5, setPosicion5] = useState('??');
 const [posicion6, setPosicion6] = useState('?');
 

// const [numero, setNumero] = useState()
 //const [serie, setSerie] = useState()

//  const resultado = {
//   "sorteo": sorteo,
//   "premio": premio,
//   "numero": numero,
//   "serie" : serie
// }

  const handleInput1Selection = (event) => {
    setPosicion1(unidad)
  }

  const handleInput2Selection = (event) => {
    setPosicion2(unidad)
  }

  const handleInput3Selection = (event) => {
    setPosicion3(unidad)
  }

  const handleInput4Selection = (event) => {
    setPosicion4(unidad)
  }

  const handleInput5Selection = (event) => {
    setPosicion5(unidad)
  }

  const handleInput6Selection = (event) => {
    setPosicion6(unidad)
  }

 const handleButtonClick = (event) => {
    setUnidad(event.target.value)
  }

  return (
    <>

      <div className="container custom-container-inputs mt-5">
        <div className="row">

          <div className="col-2" >
            <input readOnly={true} name="posicion1" type="text" className="custom-input" maxLength="1" onSelect={handleInput1Selection} onClick={handleButtonClick} value={posicion1}/>
          </div>
          <div className="col-2" >
            <input readOnly={true} name="posicion2" type="text" className="custom-input" maxLength="1" onSelect={handleInput2Selection} onClick={handleButtonClick} value={posicion2}/>
          </div>
          <div className="col-2" >
            <input readOnly={true} name="posicion3" type="text" className="custom-input" maxLength="1" onSelect={handleInput3Selection} onClick={handleButtonClick} value={posicion3}/>
          </div>
          <div className="col-2" >
            <input readOnly={true} name="posicion4" type="text" className="custom-input" maxLength="1" onSelect={handleInput4Selection} onClick={handleButtonClick} value={posicion4}/>
          </div>
          <div  className="col-2" >
            <input readOnly={true} name="posicion5" type="text" className="custom-input" maxLength="2" onSelect={handleInput5Selection} onClick={handleButtonClick} value={posicion5}/>
          </div>
          <div name="posicion6" className="col-2" >
            <input readOnly={true} name="posicion6" type="text" className="custom-input" maxLength="1" onSelect={handleInput6Selection} onClick={handleButtonClick} value={posicion6}/>
          </div>
        </div>
      </div>

      <div className="container custom-container-buttons mt-5">
        <div className="row">

          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={7}>7</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={8}>8</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={9}>9</button>
          </div>

          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={4}>4</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={5}>5</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={6}>6</button>
          </div>

          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={1}>1</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={2}>2</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={3}>3</button>
          </div>

          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick}>RES</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick} value={0}>0</button>
          </div>
          <div className="col-4 col-md-4 d-flex justify-content-center">
            <button type="button" className="btn btn-square" onClick={handleButtonClick}>ENV</button>
          </div>

        </div>
      </div>
    </>
  )
}
