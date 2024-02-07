export const ContadorResultados = ({ contador, setContador, resultados }) => {   
        
    const handleClick = () => {
       setContador(contador - 1)       
    }

    
    function encontrarPorContador(indice) {
      return indice === contador
    }
    
    let contadorResultado = resultados.find((resultado, indice) => encontrarPorContador(indice));
    
    return (
    <>       
        <div onClick={handleClick}>
          <h1>
            {
              contadorResultado ? `NUMERO: ${contadorResultado.numero} SERIE: ${contadorResultado.serie}  ID: ${contadorResultado.id}` : "RESULTADOS"
            }
          </h1>
        
           
        </div>
    </>    
  )
}
