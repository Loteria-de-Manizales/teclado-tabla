import './Resultados.css'

export function Resultados() {

const fecha= new Date().toLocaleDateString('es-co', { weekday:"long", year:"numeric", month:"long", day:"numeric"}).toUpperCase() 
const sorteo={
  "titulo": "4999",
  "tipo": "ordinario"
}
const premio={
  "premio": "SECO 36",
  "valor": "20 MILLONES DE PESOS"
}
const resultado={
  "numeros": "9097",
  "serie": "369"
}


   return (
    <>
      <h1>RESULTADOS LOTERÍA DE MANIZALES</h1>
      <h2>SORTEO: <span> { sorteo.titulo } </span> DEL <span>{fecha}</span> </h2>
      <h2><span> { premio.premio } </span> POR <span>{ premio.valor }</span></h2>
      <h1>NÚMERO: <span> { resultado.numeros } </span> SERIE: <span> { resultado.serie } </span></h1>
    </>
   )
}


