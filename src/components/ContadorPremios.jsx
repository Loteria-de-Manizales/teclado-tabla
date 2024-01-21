export const ContadorPremios = ({ contador, setContador, premios }) => {   
        
    const handleClick = () => {
       setContador(contador - 1)       
    }

    
    function encontrarPorContador(indice) {
      return indice === contador
    }
    
    let contadorPremio = premios.find((premio, indice) => encontrarPorContador(indice));
    
    return (
    <>       
        <div onClick={handleClick}>
               
        {
          contadorPremio ? contadorPremio.titulo : "PREMIOS"
        }
           
        </div>
    </>    
  )
}
