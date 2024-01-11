import { useEffect, useState } from "react";
import { createResultado, deleteResultado, updateResultado, getResultado } from "../api/axios/resultados.api";
import { useNavigate, useParams } from "react-router-dom";

export function FormularioResultados({sorteo, premio}) {

    const [entrada, setEntrada] = useState('')
    const [numeros, setNumeros] = useState()
    const [serie, setSerie] = useState()

    useEffect(()=>{    
          setNumeros(entrada.substring(0,4));
          setSerie(entrada.substring(5,8));          
        }, [entrada])
    
    const onEntradaChange = (event) => {
    setEntrada(event.target.value);     
    };

    const resultado = {
      "sorteo": sorteo,
      "premio": premio,
      "numeros": numeros,
      "serie" : serie
    } 


   
    const navigate = useNavigate();
    const params = useParams()
    
    const handleSubmit =  async (data) => {      
       if (params.id){
        updateResultado(params.id, resultado)
       }else{
        await createResultado(resultado)
       }
       navigate("/resultados")

     };

    useEffect(() => {
       const loadResultado = async() => {
         if (params.id) {
           const res = await getResultado(params.id)
           setEntrada(res.data.numeros+' '+res.data.serie)
         }
       }
       loadResultado()          
     }, [params])

  return (
    <>
      <form onSubmit={(event) => {event.preventDefault(); handleSubmit();}}>
        <input 
            type="text" 
            placeholder="entrada"
            value={entrada}
            onChange={onEntradaChange} 
        />
        
        {/* <textarea 
            className="numero" 
            placeholder='numeros'
            name="resultado" value={numeros}
            onChange={onEntradaChange}
        />

        <textarea 
            className="serie" 
            placeholder='serie'
            name="serie" value={serie}
            onChange={onEntradaChange}
        />  */}

        <h1><span>NÚMEROS : </span>{numeros}</h1>
        <h1><span>SERIE   : </span>{serie}</h1>

          <button>Siguiente</button>
      </form>

      {params.id && <button onClick={async () => {
        const accepted= window.confirm('Está seguro?')
        if (accepted){
          await deleteResultado(params.id)
          navigate('/resultados')
        }
      }}  > Eliminar </button> }
      
    </>
  )
}
