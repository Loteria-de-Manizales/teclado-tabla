import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <div>
        <Link to="/planes"><h1>Planes Lotería de Manizales</h1></Link>
        <Link to="/premios"><h1>Premios Lotería de Manizales</h1></Link>
        <Link to="/sorteos"><h1>Sorteos Lotería de Manizales</h1></Link>
        <Link to="/resultados"><h1>Resultados Lotería de Manizales</h1></Link>
        
        <Link to="/ingresar-resultado">Ingresar Resultado</Link>
    </div>    
  )
}



