
import { useState } from "react"
//import { ContadorPremios } from './components/ContadorPremios';
import { ResultadoEnVivo } from "../components/ResultadoEnVivo"

export function ResultadoEnVivoPage() {

 //const [totalPremios, setTotalPremios] = useState(0);
  //const [contadorPremios, setContadorPremios] = useState(totalPremios);

  const [vivo, setVivo] = useState()

    return (
    <ResultadoEnVivo vivo={vivo} setVivo={setVivo} />
  )
}