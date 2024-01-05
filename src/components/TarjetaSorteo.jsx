export default function TarjetaSorteo({ sorteo }) {
  return (
    <div>
        <h1>{sorteo.titulo}</h1>
        <p>{sorteo.fecha}</p>
        <p>{sorteo.tipo}</p>
    </div>
  )
}
