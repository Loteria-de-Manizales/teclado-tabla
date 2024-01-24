import { useEffect, useState } from "react"
import { getAllPlanes } from "../api/axios/premios.api"

export function LoadPlanes() {

    const [cantidad, setCantidad] = useState(0); 

useEffect(() => {
    async function loadPlanes(){
       const response = await getAllPlanes();
       setPlanes(response.data);
    }
    loadPlanes();
},[])

  return (
    console.log(`Canitidad de planes: ${premios.length}`)
    
  )
}
