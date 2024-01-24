export const ContadorSorteos = ({ contador, setContador, sorteos }) => {   
        
    const handleClick = () => {
       setContador(contador - 1)       
    }

    
    function encontrarPorContador(indice) {
      return indice === contador
    }
    
    let contadorSorteo = sorteos.find((sorteo, indice) => encontrarPorContador(indice));
    
    return (
    <>       
        <div onClick={handleClick}>
          <h1>
            {
            contadorSorteo ? contadorSorteo.titulo : "SORTEOS"
            }
          </h1>
        
           
        </div>
    </>    
  )
}
