export function TarjetaPremio({premio }) {
  return (
    <div>
        <p>{premio.id}</p>
        <h1>{premio.titulo}</h1>
        <p>{premio.valor}</p>
       

    </div>
  )
}
