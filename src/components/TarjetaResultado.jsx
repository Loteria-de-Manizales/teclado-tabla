import { useNavigate } from "react-router-dom"

export function TarjetaResultado({ resultado }) {
  
  const navigate = useNavigate() 
  
  return (
    <div style={{background: "#999999"}} 
      onClick={ () => {
        navigate(`/resultados/${resultado.id}`)
      }}
    >
        <h1>{resultado.numeros}</h1>
        <p>{resultado.serie}</p>
    </div>
  )
}
