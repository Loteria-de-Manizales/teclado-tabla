import { useEffect, useState } from "react"
import { getAllPremios } from "../api/axios/premios.api"

export function LoadPremios() {

    const [cantidad, setCantidad] = useState(0); 

useEffect(() => {
    async function loadPremios(){
       const response = await getAllPremios();
       setPremios(response.data);
    }
    loadPremios();
},[])

  return (
    console.log(`Canitidad de premios: ${premios.length}`)
    
  )
}
