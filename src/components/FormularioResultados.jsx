import { useEffect, useState } from "react";

export default function FormularioResultados() {

    const [entrada, setEntrada] = useState('')
    const [numero, setNumero] = useState()

    useEffect(()=>{
        // const {value}=cadena;
        setNumero(entrada);
    },[entrada])
    
    const onEntradaChange = (event) => {
    setEntrada(event.target.value);    
    
    };  

  return (
    <>
    <input 
        type="text" 
        placeholder="entrada"
        value={entrada}
        onChange={onEntradaChange} 
    />
    
    <textarea 
        className="numero" 
        placeholder='resultado'
        name="resultado" value={numero}
        onChange={onEntradaChange}
    /> 
      <button>Siguiente</button>
    </>
  )
}
