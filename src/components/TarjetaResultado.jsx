import { useNavigate } from "react-router-dom"

export function TarjetaResultado({ resultado }) {
  
  const navigate = useNavigate() 
  
  return (
    <div className="tarjeta"
      onClick={ () => {
        navigate(`/resultados/${resultado.id}`)
      }}
    >
        <h1><span>NÚMEROS:</span> {resultado.numeros}</h1>
        <h1><span>SERIE:</span>{resultado.serie}</h1>
    </div>
  )
}
