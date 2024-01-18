export const ContadorPremios = ({ contador, setContador }) => {   
        
    const handleClick = () => {
       setContador(contador - 1)       
    }

    return (
    <>       
        <button onClick={handleClick}>
            { contador }
        </button>
    </>    
  )
}
