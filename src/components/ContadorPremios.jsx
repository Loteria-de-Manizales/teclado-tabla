export const ContadorPremios = ({ contador, setContador, premios }) => {   
        
    const handleClick = () => {
       setContador(contador - 1)       
    }

    
    function encontrarPorContador(premio, indice) {
      return indice === contador
    }
    
    let contadorPremio = premios.find((premio, indice) => encontrarPorContador(premio, indice));
    
    console.log(contadorPremio);
    

    return (
    <>       
        <button onClick={handleClick}>
               
         {contador}
           
        </button>
    </>    
  )
}
