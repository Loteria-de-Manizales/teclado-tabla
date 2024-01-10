import { Link } from "react-router-dom"
import "./Navigation.css"

export  function Navigation() {
  return (
    <div>
      
        <Link to="/planes"><h1>Planes</h1></Link>
        <Link to="/premios"><h1>Premios</h1></Link>
        <Link to="/sorteos"><h1>Sorteos</h1></Link>
        <Link to="/resultados"><h1>Resultados</h1></Link>
        <Link to="/ingresar-resultado">Ingresar Resultado</Link>
        
      
        
    </div>    
  )
}



