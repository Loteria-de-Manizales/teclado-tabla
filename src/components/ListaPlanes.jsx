import { useEffect, useState } from "react"
import { getAllPlanes } from "../api/planes.api"
import TarjetaPlanes from "./TarjetaPlan";


export default function ListaPlanes() {

    const [planes, setPlanes] = useState([]); 

useEffect(() => {
    async function loadPlanes(){
       const res = await getAllPlanes();
       setPlanes(res.data)
    }
    loadPlanes();
},[])

  return (
    <div>{planes.map(plan => (
        < TarjetaPlanes key={plan.id} plan={ plan } />
    ))}</div>
  )
}
