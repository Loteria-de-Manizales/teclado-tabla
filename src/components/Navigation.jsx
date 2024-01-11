import { Link } from "react-router-dom"
import "./Navigation.css"

export  function Navigation() {
  return (
    <div>
      
        <Link to="/planes"><h4>Planes</h4></Link>
        <Link to="/premios"><h4>Premios</h4></Link>
        <Link to="/sorteos"><h4>Sorteos</h4></Link>
        <Link to="/resultados"><h4>Resultados</h4></Link>
        <Link to="/ingresar-resultado"><h4>Ingresar Resultado</h4></Link>
   
      
        
    </div>    
  )
}



