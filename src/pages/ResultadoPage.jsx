import { useEffect, useState } from "react";
import { TarjetaResultado } from "../components/TarjetaResultado";
import { getResultado } from "../api/axios/resultados.api";

export function ResultadoPage({contador}) {

  const [resultado, setResultado] = useState([])

  useEffect(() => {
    async function loadResultado(){
      const response= await getResultado(contador);
      setResultado(response.data)
      console.log(response)
    }
    loadResultado();
  }, [contador])

  return (
    <>
      <div>
        <TarjetaResultado key={contador} resultado={resultado}/>
      </div>      
    </>
  )
}
