import { useEffect, useState } from "react";
import { createResultado } from "../api/axios/resultados.api";

export function FormularioResultados({sorteo, premio}) {

    const [entrada, setEntrada] = useState('')
    const [numero, setNumero] = useState()

    useEffect(()=>{
        // const {value}=cadena;
        setNumero(entrada);
    },[entrada])
    
    const onEntradaChange = (event) => {
    setEntrada(event.target.value);     
    };

    const resultado = {
      "sorteo": sorteo,
      "premio": premio,
      "numeros": numero,
      "serie" : "096"
    } 

    const handleSubmit =  async (data) => {      
       
        const response = await createResultado(resultado)
        console.log(response)     
     };

  return (
    <>
      <form onSubmit={(event) => {event.preventDefault(); handleSubmit();}}>
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
      </form>
    </>
  )
}
