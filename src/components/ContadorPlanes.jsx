export const ContadorPlanes = ({ contador, setContador, planes }) => {   
        
    const handleClick = () => {
       setContador(contador - 1)       
    }

    
    function encontrarPorContador(indice) {
      return indice === contador
    }
    
    let contadorPlan = planes.find((plan, indice) => encontrarPorContador(indice));
    
    return (
    <>       
        <div onClick={handleClick}>
          <h1>
            {
            contadorPlan ? contadorPlan.titulo : "PLANES"
            }
          </h1>
        
           
        </div>
    </>    
  )
}
