import { useEffect, useState } from "react"
import { getAllSorteos } from "../api/axios/sorteos.api"
import { TarjetaSorteo } from "./TarjetaSorteo";


export function ListaSorteos() {

    const [sorteos, setSorteos] = useState([]); 

useEffect(() => {
    async function loadSorteos(){
       const res = await getAllSorteos();
       setSorteos(res.data)
    }
    loadSorteos();
},[])

  return (
    <div>{sorteos.map(sorteo => (
        < TarjetaSorteo key={sorteo.id} sorteo={ sorteo } />
    ))}</div>
  )
}
