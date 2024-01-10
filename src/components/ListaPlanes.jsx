import { useEffect, useState } from "react"
import { getAllPlanes } from "../api/axios/planes.api"
import { TarjetaPlan }  from "./TarjetaPlan";


export function ListaPlanes() {

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
        < TarjetaPlan key={plan.id} plan={ plan } />
    ))}</div>
  )
}
