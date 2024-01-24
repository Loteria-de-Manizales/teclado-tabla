import { useEffect, useState } from "react"
import { getAllResultados } from "../api/axios/resultados.api"
import { TarjetaResultado } from "./TarjetaResultado";


export function ListaResultados() {

    const [resultados, setResultados] = useState([]); 

useEffect(() => {
    async function loadResultados(){
       const res = await getAllResultados();
       setResultados(res.data)
    }
    loadResultados();
},[])

  return (
    <div>{resultados.map(resultado => (
        < TarjetaResultado key={resultado.id} resultado={ resultado} />
    ))}</div>
  )
}
