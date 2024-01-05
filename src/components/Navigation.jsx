import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <div>
        <Link to="/premios"><h1>Premios Lotería de Manizales</h1></Link>
        
        <Link to="/ingresar-resultado">Ingresar Resultado</Link>
    </div>    
  )
}



