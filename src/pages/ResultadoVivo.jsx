
import { useState } from "react"
import { SiguienteResultado } from "../components/SiguienteResultado"

export function ResultadoVivoPage() {

  const [siguienteResultado, setSiguineteResultado] = useState()

  return (
    <SiguienteResultado siguienteResultado={siguienteResultado} setSiguienteResultado={setSiguineteResultado}/>
  )
}