export const IndiceResultado = ({ IndiceResultado, setIndiceResultado, resultados }) => {   
        
    const handleClick = () => {
       setContador()       
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
            contadorResultado ? contadorResultado.id : "RESULTADOS"
            }
          </h1>
        
           
        </div>
    </>    
  )
}
