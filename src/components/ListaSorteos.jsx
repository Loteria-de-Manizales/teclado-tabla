import { useEffect, useState } from "react"
import { getAllSorteos } from "../api/sorteos.api"
import TarjetaSorteo from "./TarjetaSorteo";


export default function ListaSorteos() {

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
