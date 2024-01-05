import { useEffect, useState } from "react"
import { getAllResultados } from "../api/resultados.api"
import TarjetaResultado from "./TarjetaResultado";


export default function ListaPlanes() {

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
        < TarjetaResultado key={resultado.id} resultado={ resultado } />
    ))}</div>
  )
}
