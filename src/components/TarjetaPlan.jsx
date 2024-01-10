export function TarjetaPlan({ plan }) {
  return (
    <div>
        <h1>{plan.titulo}</h1>
        <p>{plan.maximo_premios}</p>
        <p>{plan.numero_premios}</p>
    </div>
  )
}
