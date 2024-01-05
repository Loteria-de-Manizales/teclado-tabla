export default function TarjetaPremios({ premio }) {
  return (
    <div>
        <h1>{premio.premio}</h1>
        <p>{premio.valor}</p>
    </div>
  )
}
