import { useEffect, useState } from "react";
//import { createResultado, deleteResultado, updateResultado, getResultado } from "../api/axios/resultados.api";
import { useNavigate, useParams } from "react-router-dom";

export function ResultadosTeclado({sorteo, premio}) {

    const [entrada, setEntrada] = useState('')
    const [numero, setNumero] = useState()
    const [serie, setSerie] = useState()

    useEffect(()=>{    
          setNumero(entrada.substring(0,4));
          setSerie(entrada.substring(5,8));          
        }, [entrada])
    
    const onEntradaChange = (event) => {
    setEntrada(event.target.value);     
    };

  /*   const resultado = {
      "sorteo": sorteo,
      "premio": premio,
      "numero": numero,
      "serie" : serie
    } 
 */
    

  return (
    <>
      <form onSubmit={(event) => {event.preventDefault(); handleSubmit();}}>
        <input 
            type="text" 
            placeholder="entrada"
            value={entrada}
            onChange={onEntradaChange} 
        />
        
       {/*  <textarea 
            className="numero" 
            placeholder='numero'
            name="resultado" value={numero}
            onChange={onEntradaChange}
        />

        <textarea 
            className="serie" 
            placeholder='serie'
            name="serie" value={serie}
            onChange={onEntradaChange}
        />
 */}
        <h1><span>NÚMEROS : </span>{numero}</h1>
        <h1><span>SERIE   : </span>{serie}</h1>

          <button>Siguiente</button>
      </form>

      
      
    </>
  )
}
